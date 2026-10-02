/**
 * Mid-Sem Exam Prep Tracker - High Performance Exam Mastery Suite
 * Ultra-Responsive UI/UX with In-Place DOM Mutation & Zero Re-render Lag
 */

const STORAGE_KEY = 'mid_sem_exam_tracker_v3';
const THEME_KEY = 'mid_sem_exam_theme_pref';
const SOUND_KEY = 'mid_sem_exam_sound_pref';

// Main Application State
let appState = {
    topics: {},              // id -> { status, starred, notes }
    customTopics: {},        // moduleId -> [ { id, title, desc, status, starred, notes } ]
    collapsedSubjects: {},   // subjectId -> bool
    pomodoro: {
        timeLeft: 25 * 60,
        isRunning: false,
        mode: 'focus',        // 'focus' | 'break'
        sessionsCompleted: 0
    }
};

let activeFilter = 'all';     // 'all' | 'pending' | 'in_progress' | 'done' | 'starred' | 'next_exam'
let searchQuery = '';
let activeEditingTopicId = null;
let currentTheme = 'light';
let soundEnabled = true;
let timerInterval = null;

// ==========================================
// Web Audio Synthesizer (Zero External Files)
// ==========================================

let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playTickSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
}

function playChimeSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);
            gain.gain.setValueAtTime(0.15, now + idx * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.35);
        });
    } catch (e) {}
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem(SOUND_KEY, soundEnabled ? '1' : '0');
    updateSoundButton();
    showToastNotification(soundEnabled ? 'Audio feedback ON 🔊' : 'Audio feedback MUTED 🔇');
}

function updateSoundButton() {
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
        btn.innerHTML = soundEnabled ? '🔊 Sound' : '🔇 Mute';
        btn.title = soundEnabled ? 'Mute audio feedback' : 'Enable audio feedback';
    }
}

// ==========================================
// Boot & Initialization
// ==========================================

function initApp() {
    loadThemePreference();
    loadSoundPreference();
    loadPersistedState();
    renderTimelineStrip();
    renderSubjectMiniCards();
    renderSubjectsAccordions();
    updateMasterMetrics();
    initGlobalCountdowns();
    updateTimerDisplay();
    bindGlobalListeners();
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(savedTheme);
}

function loadSoundPreference() {
    const saved = localStorage.getItem(SOUND_KEY);
    soundEnabled = saved !== '0';
    updateSoundButton();
}

function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        if (theme === 'dark') {
            themeBtn.innerHTML = `
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                Light
            `;
            themeBtn.title = "Switch to clean white theme";
        } else {
            themeBtn.innerHTML = `
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                Dark
            `;
            themeBtn.title = "Switch to dark theme";
        }
    }
}

function toggleTheme() {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    showToastNotification(nextTheme === 'light' ? 'Switched to clean white theme ☀️' : 'Switched to dark theme 🌙');
}

function loadPersistedState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            appState = { ...appState, ...parsed };
        }
    } catch (err) {
        console.warn('Could not read state from localStorage', err);
    }
}

function persistState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (err) {
        console.error('Could not save state to localStorage', err);
    }
    updateMasterMetrics();
}

function showToastNotification(message) {
    const toast = document.getElementById('toastNotice');
    const toastMsg = document.getElementById('toastMessageText');
    if (!toast || !toastMsg) return;

    toastMsg.innerText = message;
    toast.classList.add('is-visible');

    clearTimeout(toast._timeoutId);
    toast._timeoutId = setTimeout(() => {
        toast.classList.remove('is-visible');
    }, 2800);
}

// ==========================================
// Exam Timeline Ribbon
// ==========================================

function renderTimelineStrip() {
    const container = document.getElementById('timelineCardsRow');
    if (!container) return;
    container.innerHTML = '';

    const now = new Date().getTime();
    let nextExamFound = false;

    EXAM_SCHEDULE.forEach(exam => {
        const examTargetTime = new Date(`${exam.date}T${exam.time}:00`).getTime();
        const diff = examTargetTime - now;
        const isPast = diff <= 0;
        const isNext = !isPast && !nextExamFound;
        if (isNext) nextExamFound = true;

        const card = document.createElement('div');
        card.className = `timeline-item ${isNext ? 'next-exam' : ''}`;
        card.style.setProperty('--exam-color', exam.color);
        card.onclick = () => scrollToSubjectSection(exam.id);

        card.innerHTML = `
            <div class="timeline-top">
                <span class="timeline-date">${exam.dateDisplay}</span>
                <span class="timeline-tag" style="color: ${exam.color};">${isNext ? '🚨 NEXT EXAM' : (isPast ? 'DONE' : 'UPCOMING')}</span>
            </div>
            <div class="timeline-subject-name" title="${exam.name}">${exam.name}</div>
            <div class="timeline-countdown" id="timeline-cd-${exam.id}">
                ${formatCountdown(diff)}
            </div>
        `;

        container.appendChild(card);
    });
}

function formatCountdown(diff) {
    if (diff <= 0) return 'Exam Done / Past';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
        return `⏳ in ${days}d ${hours}h ${mins}m`;
    }
    return `⚡ in ${hours}h ${mins}m`;
}

function initGlobalCountdowns() {
    setInterval(() => {
        const now = new Date().getTime();
        EXAM_SCHEDULE.forEach(exam => {
            const el = document.getElementById(`timeline-cd-${exam.id}`);
            if (el) {
                const examTargetTime = new Date(`${exam.date}T${exam.time}:00`).getTime();
                const diff = examTargetTime - now;
                el.innerText = formatCountdown(diff);
            }
        });
    }, 1000);
}

// ==========================================
// Master Metrics & Progress Calculations
// ==========================================

function updateMasterMetrics() {
    let totalTopics = 0;
    let completedTopics = 0;
    let inProgressTopics = 0;
    let starredTopics = 0;

    SYLLABUS_DATA.forEach(sub => {
        sub.modules.forEach(mod => {
            mod.topics.forEach(t => {
                totalTopics++;
                const s = appState.topics[t.id];
                if (s) {
                    if (s.status === 'done') completedTopics++;
                    else if (s.status === 'in_progress') inProgressTopics++;
                    if (s.starred) starredTopics++;
                }
            });

            const customs = appState.customTopics[mod.name] || [];
            customs.forEach(ct => {
                totalTopics++;
                if (ct.status === 'done') completedTopics++;
                else if (ct.status === 'in_progress') inProgressTopics++;
                if (ct.starred) starredTopics++;
            });
        });
    });

    const pendingTopics = totalTopics - completedTopics - inProgressTopics;
    const overallPercentage = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);

    const gaugeEl = document.getElementById('overallGaugeVal');
    const fillEl = document.getElementById('masterProgressFill');
    const countLabelEl = document.getElementById('topicsCountSummary');
    const inProgressLabelEl = document.getElementById('topicsInProgressSummary');

    if (gaugeEl) gaugeEl.innerText = `${overallPercentage}%`;
    if (fillEl) fillEl.style.width = `${overallPercentage}%`;
    if (countLabelEl) countLabelEl.innerText = `${completedTopics} of ${totalTopics} checkpoints mastered`;
    if (inProgressLabelEl) inProgressLabelEl.innerText = `${inProgressTopics} in progress`;

    const setElemText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    setElemText('statTotalNum', totalTopics);
    setElemText('statDoneNum', completedTopics);
    setElemText('statProgressNum', inProgressTopics);
    setElemText('statPendingNum', pendingTopics);
    setElemText('statStarredNum', starredTopics);

    refreshSubjectCardsData();
    refreshSubjectHeaderScores();
}

// ==========================================
// Subject Overview Cards
// ==========================================

function renderSubjectMiniCards() {
    const grid = document.getElementById('subjectCardsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    SYLLABUS_DATA.forEach(sub => {
        let total = 0;
        let done = 0;
        sub.modules.forEach(m => {
            m.topics.forEach(t => {
                total++;
                if (appState.topics[t.id]?.status === 'done') done++;
            });
            const customs = appState.customTopics[m.name] || [];
            customs.forEach(ct => {
                total++;
                if (ct.status === 'done') done++;
            });
        });

        const pct = total === 0 ? 0 : Math.round((done / total) * 100);

        const card = document.createElement('div');
        card.className = 'subject-mini-card';
        card.id = `mini-card-${sub.id}`;
        card.style.color = sub.color;
        card.onclick = () => scrollToSubjectSection(sub.id);

        card.innerHTML = `
            <div class="sub-card-header">
                <div class="sub-card-title">${sub.icon} ${sub.name}</div>
                <div class="sub-card-pct" id="mini-pct-${sub.id}">${pct}%</div>
            </div>
            <div class="sub-exam-date-pill">🗓️ ${sub.examDateDisplay}</div>
            <div class="sub-card-track">
                <div class="sub-card-fill" id="mini-fill-${sub.id}" style="width: ${pct}%;"></div>
            </div>
            <div class="sub-card-meta">
                <span id="mini-count-${sub.id}">${done} / ${total} done</span>
                <span style="font-weight: 700;">${sub.shortName}</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

function refreshSubjectCardsData() {
    SYLLABUS_DATA.forEach(sub => {
        let total = 0;
        let done = 0;
        sub.modules.forEach(m => {
            m.topics.forEach(t => {
                total++;
                if (appState.topics[t.id]?.status === 'done') done++;
            });
            const customs = appState.customTopics[m.name] || [];
            customs.forEach(ct => {
                total++;
                if (ct.status === 'done') done++;
            });
        });
        const pct = total === 0 ? 0 : Math.round((done / total) * 100);

        const pctEl = document.getElementById(`mini-pct-${sub.id}`);
        const fillEl = document.getElementById(`mini-fill-${sub.id}`);
        const countEl = document.getElementById(`mini-count-${sub.id}`);

        if (pctEl) pctEl.innerText = `${pct}%`;
        if (fillEl) fillEl.style.width = `${pct}%`;
        if (countEl) countEl.innerText = `${done} / ${total} done`;
    });
}

function refreshSubjectHeaderScores() {
    SYLLABUS_DATA.forEach(sub => {
        let subTotal = 0;
        let subDone = 0;
        sub.modules.forEach(m => {
            m.topics.forEach(t => {
                subTotal++;
                if (appState.topics[t.id]?.status === 'done') subDone++;
            });
            const customs = appState.customTopics[m.name] || [];
            customs.forEach(ct => {
                subTotal++;
                if (ct.status === 'done') subDone++;
            });
        });
        const subPct = subTotal === 0 ? 0 : Math.round((subDone / subTotal) * 100);
        const scoreBadge = document.getElementById(`header-score-${sub.id}`);
        if (scoreBadge) {
            scoreBadge.innerText = `${subDone}/${subTotal} (${subPct}%)`;
        }
    });
}

// ==========================================
// Subject Sections & Topic Accordions
// ==========================================

function renderSubjectsAccordions() {
    const container = document.getElementById('subjectsAccordionsContainer');
    if (!container) return;
    container.innerHTML = '';

    let totalRenderedTopics = 0;
    const q = searchQuery.toLowerCase().trim();

    SYLLABUS_DATA.forEach(sub => {
        if (activeFilter === 'next_exam' && sub.id !== 'lade') {
            return;
        }

        const isCollapsed = !!appState.collapsedSubjects[sub.id];

        let subTotal = 0;
        let subDone = 0;
        sub.modules.forEach(m => {
            m.topics.forEach(t => {
                subTotal++;
                if (appState.topics[t.id]?.status === 'done') subDone++;
            });
            const customs = appState.customTopics[m.name] || [];
            customs.forEach(ct => {
                subTotal++;
                if (ct.status === 'done') subDone++;
            });
        });
        const subPct = subTotal === 0 ? 0 : Math.round((subDone / subTotal) * 100);

        const section = document.createElement('section');
        section.className = `subject-section ${isCollapsed ? 'collapsed' : ''}`;
        section.id = `section-${sub.id}`;
        section.style.setProperty('--sub-theme-color', sub.color);

        const header = document.createElement('div');
        header.className = 'subject-header';
        header.onclick = (e) => {
            if (e.target.closest('.no-collapse')) return;
            toggleSubjectCollapse(sub.id);
        };

        header.innerHTML = `
            <div class="subject-header-title">
                <div class="subject-tag-badge" style="background: ${sub.color};">${sub.shortName}</div>
                <div>
                    <h3>${sub.name} <span class="subject-exam-pill">🗓️ ${sub.examDateDisplay}</span></h3>
                    <span class="sub-meta-info">${sub.modules.length} Modules &bull; ${subTotal} Checkpoints</span>
                </div>
            </div>
            <div class="subject-header-meta">
                <div class="subject-score-badge" id="header-score-${sub.id}" style="color: ${sub.color};">
                    ${subDone}/${subTotal} (${subPct}%)
                </div>
                <svg class="chevron-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
        `;

        section.appendChild(header);

        const modulesWrap = document.createElement('div');
        modulesWrap.className = 'modules-container';

        let subjectHasMatches = false;

        sub.modules.forEach(mod => {
            const allModTopics = [
                ...mod.topics.map(t => ({ ...t, isCustom: false })),
                ...(appState.customTopics[mod.name] || []).map(ct => ({ ...ct, isCustom: true }))
            ];

            const filteredTopics = allModTopics.filter(t => {
                const s = t.isCustom ? t : (appState.topics[t.id] || { status: 'not_started', starred: false, notes: '' });

                if (activeFilter === 'done' && s.status !== 'done') return false;
                if (activeFilter === 'in_progress' && s.status !== 'in_progress') return false;
                if (activeFilter === 'pending' && s.status === 'done') return false;
                if (activeFilter === 'starred' && !s.starred) return false;

                if (q !== '') {
                    const matchTitle = (t.title || '').toLowerCase().includes(q);
                    const matchDesc = (t.desc || '').toLowerCase().includes(q);
                    const matchNotes = (s.notes || '').toLowerCase().includes(q);
                    if (!matchTitle && !matchDesc && !matchNotes) return false;
                }

                return true;
            });

            if (filteredTopics.length === 0 && searchQuery !== '') return;

            subjectHasMatches = true;
            totalRenderedTopics += filteredTopics.length;

            const modBox = document.createElement('div');
            modBox.className = 'module-box';

            let modDone = 0;
            allModTopics.forEach(t => {
                const s = t.isCustom ? t : appState.topics[t.id];
                if (s?.status === 'done') modDone++;
            });

            modBox.innerHTML = `
                <div class="module-box-header">
                    <h4>${mod.name}</h4>
                    <span id="mod-done-${mod.name.replace(/[^a-zA-Z0-9]/g, '_')}">${modDone}/${allModTopics.length} done</span>
                </div>
            `;

            const topicList = document.createElement('ul');
            topicList.className = 'topics-list';

            filteredTopics.forEach(topic => {
                const s = topic.isCustom ? topic : (appState.topics[topic.id] || { status: 'not_started', starred: false, notes: '' });
                const isDone = s.status === 'done';
                const isInProgress = s.status === 'in_progress';
                const isStarred = !!s.starred;
                const hasNotes = !!(s.notes && s.notes.trim() !== '');

                const row = document.createElement('li');
                row.className = `topic-row status-${s.status || 'not_started'}`;
                row.id = `topic-${topic.id}`;

                row.innerHTML = `
                    <div class="topic-main" onclick="toggleTopicDoneState('${topic.id}', ${topic.isCustom}, '${mod.name.replace(/'/g, "\\'")}')">
                        <div class="interactive-check" title="Click to toggle Done">
                            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div class="topic-texts">
                            <div class="topic-heading">
                                ${topic.title}
                                ${topic.isCustom ? '<span style="font-size: 0.68rem; color: #4f46e5; font-weight:700;">[CUSTOM]</span>' : ''}
                            </div>
                            <div class="topic-desc">${topic.desc}</div>
                        </div>
                    </div>
                    <div class="topic-controls no-collapse">
                        <select class="status-picker" onchange="setTopicStatus('${topic.id}', this.value, ${topic.isCustom}, '${mod.name.replace(/'/g, "\\'")}')" title="Change status">
                            <option value="not_started" ${s.status === 'not_started' || !s.status ? 'selected' : ''}>Pending</option>
                            <option value="in_progress" ${isInProgress ? 'selected' : ''}>In Progress</option>
                            <option value="done" ${isDone ? 'selected' : ''}>Done ✓</option>
                        </select>
                        <button class="icon-action-btn ${isStarred ? 'active-star' : ''}" id="star-btn-${topic.id}" onclick="toggleTopicStar('${topic.id}', ${topic.isCustom}, '${mod.name.replace(/'/g, "\\'")}')" title="Star as priority topic">
                            <svg width="17" height="17" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        </button>
                        <button class="icon-action-btn ${hasNotes ? 'active-note' : ''}" id="note-btn-${topic.id}" onclick="openNotesModal('${topic.id}', '${topic.title.replace(/'/g, "\\'")}', ${topic.isCustom}, '${mod.name.replace(/'/g, "\\'")}')" title="Revision notes & formulas">
                            <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        </button>
                    </div>
                `;

                topicList.appendChild(row);
            });

            modBox.appendChild(topicList);

            const addBtn = document.createElement('button');
            addBtn.className = 'add-custom-topic-btn no-collapse';
            addBtn.innerHTML = `+ Add Custom Topic / Question to "${mod.name}"`;
            addBtn.onclick = () => promptAddCustomTopic(mod.name);
            modBox.appendChild(addBtn);

            modulesWrap.appendChild(modBox);
        });

        section.appendChild(modulesWrap);

        if (subjectHasMatches || (searchQuery === '' && activeFilter === 'all')) {
            container.appendChild(section);
        }
    });

    const emptyEl = document.getElementById('emptyResultsBox');
    if (emptyEl) {
        emptyEl.style.display = (totalRenderedTopics === 0 && (searchQuery !== '' || activeFilter !== 'all')) ? 'block' : 'none';
    }
}

// ==========================================
// Instant In-Place DOM Topic State Toggle
// ==========================================

function toggleTopicDoneState(topicId, isCustom = false, modName = '') {
    let newStatus = 'done';
    if (isCustom && modName) {
        const list = appState.customTopics[modName] || [];
        const item = list.find(t => t.id === topicId);
        if (item) {
            item.status = item.status === 'done' ? 'not_started' : 'done';
            newStatus = item.status;
        }
    } else {
        if (!appState.topics[topicId]) {
            appState.topics[topicId] = { status: 'done', starred: false, notes: '' };
        } else {
            appState.topics[topicId].status = (appState.topics[topicId].status === 'done') ? 'not_started' : 'done';
            newStatus = appState.topics[topicId].status;
        }
    }

    if (newStatus === 'done') {
        playTickSound();
    }

    // In-place DOM update (zero scroll jump or screen flash)
    const row = document.getElementById(`topic-${topicId}`);
    if (row) {
        row.className = `topic-row status-${newStatus}`;
        const select = row.querySelector('.status-picker');
        if (select) select.value = newStatus;
    }

    persistState();
}

function setTopicStatus(topicId, status, isCustom = false, modName = '') {
    if (isCustom && modName) {
        const list = appState.customTopics[modName] || [];
        const item = list.find(t => t.id === topicId);
        if (item) {
            item.status = status;
        }
    } else {
        if (!appState.topics[topicId]) {
            appState.topics[topicId] = { status: status, starred: false, notes: '' };
        } else {
            appState.topics[topicId].status = status;
        }
    }

    if (status === 'done') {
        playTickSound();
    }

    const row = document.getElementById(`topic-${topicId}`);
    if (row) {
        row.className = `topic-row status-${status}`;
    }

    persistState();
}

function toggleTopicStar(topicId, isCustom = false, modName = '') {
    let nowStarred = false;
    if (isCustom && modName) {
        const list = appState.customTopics[modName] || [];
        const item = list.find(t => t.id === topicId);
        if (item) {
            item.starred = !item.starred;
            nowStarred = item.starred;
        }
    } else {
        if (!appState.topics[topicId]) {
            appState.topics[topicId] = { status: 'not_started', starred: true, notes: '' };
            nowStarred = true;
        } else {
            appState.topics[topicId].starred = !appState.topics[topicId].starred;
            nowStarred = appState.topics[topicId].starred;
        }
    }

    const starBtn = document.getElementById(`star-btn-${topicId}`);
    if (starBtn) {
        starBtn.className = `icon-action-btn ${nowStarred ? 'active-star' : ''}`;
        const svg = starBtn.querySelector('svg');
        if (svg) svg.setAttribute('fill', nowStarred ? 'currentColor' : 'none');
    }

    persistState();
    showToastNotification(nowStarred ? '⭐ Pinned to Priority Starred' : 'Removed from Starred');
}

function promptAddCustomTopic(modName) {
    const title = prompt(`Enter checkpoint title for ${modName}:`);
    if (!title || !title.trim()) return;
    const desc = prompt("Enter short description / question note (optional):") || "";

    if (!appState.customTopics[modName]) {
        appState.customTopics[modName] = [];
    }

    const newTopic = {
        id: `custom-${Date.now()}`,
        title: title.trim(),
        desc: desc.trim(),
        status: 'not_started',
        starred: false,
        notes: ''
    };

    appState.customTopics[modName].push(newTopic);
    persistState();
    renderSubjectsAccordions();
    renderSubjectMiniCards();
    showToastNotification('Custom checkpoint added! 📝');
}

function toggleSubjectCollapse(subjectId) {
    appState.collapsedSubjects[subjectId] = !appState.collapsedSubjects[subjectId];
    persistState();
    const sec = document.getElementById(`section-${subjectId}`);
    if (sec) {
        sec.classList.toggle('collapsed', appState.collapsedSubjects[subjectId]);
    }
}

function scrollToSubjectSection(subjectId) {
    if (appState.collapsedSubjects[subjectId]) {
        appState.collapsedSubjects[subjectId] = false;
        persistState();
        renderSubjectsAccordions();
    }
    const sec = document.getElementById(`section-${subjectId}`);
    if (sec) {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleExpandAllSubjects() {
    const allCollapsed = Object.values(appState.collapsedSubjects).every(v => v);
    const newState = !allCollapsed;
    SYLLABUS_DATA.forEach(sub => {
        appState.collapsedSubjects[sub.id] = newState;
    });
    persistState();
    renderSubjectsAccordions();
    showToastNotification(newState ? 'Collapsed all subjects' : 'Expanded all subjects');
}

function handleFilterClick(filterType, element) {
    activeFilter = filterType;
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    } else {
        const match = document.querySelector(`.filter-chip[onclick*="'${filterType}'"]`);
        if (match) match.classList.add('active');
    }

    if (filterType === 'next_exam') {
        appState.collapsedSubjects['lade'] = false;
        renderSubjectsAccordions();
        scrollToSubjectSection('lade');
        showToastNotification('Focusing on Next Exam: LA&DE (5 Oct) 🚨');
        return;
    }

    renderSubjectsAccordions();
}

function handleLiveSearch(value) {
    searchQuery = value;
    renderSubjectsAccordions();
}

function markAllVisibleDone() {
    let count = 0;
    document.querySelectorAll('.topic-row').forEach(row => {
        const id = row.id.replace('topic-', '');
        if (!appState.topics[id]) appState.topics[id] = {};
        appState.topics[id].status = 'done';
        row.className = 'topic-row status-done';
        const select = row.querySelector('.status-picker');
        if (select) select.value = 'done';
        count++;
    });
    playTickSound();
    persistState();
    showToastNotification(`Marked ${count} checkpoints as Done! Keep going! 🚀`);
}

// ==========================================
// Study Sprint Timer (Pomodoro 25/5 min)
// ==========================================

function updateTimerDisplay() {
    const mins = Math.floor(appState.pomodoro.timeLeft / 60);
    const secs = appState.pomodoro.timeLeft % 60;
    const el = document.getElementById('timerDigits');
    if (el) {
        el.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
}

function toggleTimer() {
    const btn = document.getElementById('timerToggleBtn');
    if (appState.pomodoro.isRunning) {
        clearInterval(timerInterval);
        appState.pomodoro.isRunning = false;
        if (btn) btn.innerText = "Resume Sprint";
    } else {
        appState.pomodoro.isRunning = true;
        if (btn) btn.innerText = "Pause";
        timerInterval = setInterval(() => {
            if (appState.pomodoro.timeLeft > 0) {
                appState.pomodoro.timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                appState.pomodoro.isRunning = false;
                appState.pomodoro.sessionsCompleted++;
                playChimeSound();
                showToastNotification('🔔 Focus sprint finished! Great job! Take 5m break.');
                resetTimer(5);
            }
        }, 1000);
    }
}

function resetTimer(minutes = 25) {
    clearInterval(timerInterval);
    appState.pomodoro.isRunning = false;
    appState.pomodoro.timeLeft = minutes * 60;
    const btn = document.getElementById('timerToggleBtn');
    if (btn) btn.innerText = `Start ${minutes}m`;
    updateTimerDisplay();
}

// ==========================================
// Notes Drawer / Modal
// ==========================================

let activeNotesIsCustom = false;
let activeNotesModName = '';

function openNotesModal(topicId, topicTitle, isCustom = false, modName = '') {
    activeEditingTopicId = topicId;
    activeNotesIsCustom = isCustom;
    activeNotesModName = modName;

    const titleEl = document.getElementById('notesModalTopicTitle');
    const editor = document.getElementById('notesModalEditor');
    const modal = document.getElementById('notesModalDialog');

    if (titleEl) titleEl.innerText = topicTitle;

    let existingNotes = '';
    if (isCustom && modName) {
        const item = (appState.customTopics[modName] || []).find(t => t.id === topicId);
        existingNotes = item?.notes || '';
    } else {
        existingNotes = appState.topics[topicId]?.notes || '';
    }

    if (editor) editor.value = existingNotes;
    if (modal) modal.classList.add('is-open');
    if (editor) editor.focus();
}

function closeNotesModal() {
    const modal = document.getElementById('notesModalDialog');
    if (modal) modal.classList.remove('is-open');
    activeEditingTopicId = null;
}

function saveNotesFromModal() {
    if (!activeEditingTopicId) return;
    const editor = document.getElementById('notesModalEditor');
    const content = editor ? editor.value : '';

    if (activeNotesIsCustom && activeNotesModName) {
        const item = (appState.customTopics[activeNotesModName] || []).find(t => t.id === activeEditingTopicId);
        if (item) item.notes = content;
    } else {
        if (!appState.topics[activeEditingTopicId]) {
            appState.topics[activeEditingTopicId] = { status: 'not_started', starred: false, notes: content };
        } else {
            appState.topics[activeEditingTopicId].notes = content;
        }
    }

    // In-place button highlight update
    const noteBtn = document.getElementById(`note-btn-${activeEditingTopicId}`);
    if (noteBtn) {
        noteBtn.className = `icon-action-btn ${content.trim() ? 'active-note' : ''}`;
    }

    persistState();
    closeNotesModal();
    showToastNotification('Revision note saved! 📝');
}

// ==========================================
// Backup & Reset Functionality
// ==========================================

function exportBackupJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `mid_sem_exam_prep_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToastNotification('Backup file downloaded! 📥');
}

function handleImportJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported) {
                appState = { ...appState, ...imported };
                persistState();
                renderTimelineStrip();
                renderSubjectMiniCards();
                renderSubjectsAccordions();
                showToastNotification('Backup restored successfully! 🎉');
            }
        } catch (err) {
            alert('Failed to parse backup JSON file.');
        }
    };
    reader.readAsText(file);
}

function promptResetProgress() {
    if (confirm("Reset all tracked progress back to Pending? (Notes will be preserved)")) {
        Object.keys(appState.topics).forEach(k => {
            appState.topics[k].status = 'not_started';
        });
        persistState();
        renderSubjectMiniCards();
        renderSubjectsAccordions();
        showToastNotification('Progress reset back to Pending.');
    }
}

// ==========================================
// Global Event Bindings
// ==========================================

function bindGlobalListeners() {
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNotesModal();
            const searchInput = document.getElementById('liveSearchInput');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.value = '';
                handleLiveSearch('');
                searchInput.blur();
            }
        }
        // Press "/" to focus search immediately
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const searchInput = document.getElementById('liveSearchInput');
            if (searchInput) searchInput.focus();
        }
    });
}

document.addEventListener('DOMContentLoaded', initApp);

/**
 * Mid-Semester Preparation Syllabus Data Model
 * Sorted by Exact Exam Schedule:
 * 1. LA&DE (Linear Algebra & Diff Equations) - Oct 5
 * 2. Discrete Mathematics - Oct 6
 * 3. DSA (Data Structures & Algorithms) - Oct 7
 * 4. DA (Data Analytics) - Oct 8
 * 5. Java (OOPs) - Oct 9
 * 6. Digital Logic Design (DLD) - Oct 9
 */

const EXAM_SCHEDULE = [
    { id: "lade", name: "Linear Algebra & Diff Eq", code: "LA&DE", date: "2026-10-05", dateDisplay: "5 Oct", time: "09:00", color: "#db2777" },
    { id: "discrete", name: "Discrete Mathematics", code: "DM", date: "2026-10-06", dateDisplay: "6 Oct", time: "09:00", color: "#7c3aed" },
    { id: "dsa", name: "Data Structures & Algos", code: "DSA", date: "2026-10-07", dateDisplay: "7 Oct", time: "09:00", color: "#059669" },
    { id: "da", name: "Data Analytics (DA)", code: "DA", date: "2026-10-08", dateDisplay: "8 Oct", time: "09:00", color: "#2563eb" },
    { id: "java", name: "Java (OOPs)", code: "OOPS", date: "2026-10-09", dateDisplay: "9 Oct", time: "09:00", color: "#d97706" },
    { id: "dld", name: "Digital Logic Design", code: "DLD", date: "2026-10-09", dateDisplay: "9 Oct", time: "14:00", color: "#0284c7" }
];

const SYLLABUS_DATA = [
    {
        id: "lade",
        name: "Linear Algebra & Diff Equations",
        shortName: "LA&DE",
        examDate: "2026-10-05",
        examDateDisplay: "5 Oct 2026",
        icon: "📐",
        color: "#db2777",
        glow: "rgba(219, 39, 119, 0.2)",
        modules: [
            {
                name: "1. Systems of Linear Equations & Elimination",
                topics: [
                    { id: "la-matrix-rep", title: "Linear Systems & Matrix Representation", desc: "Coefficient matrix, augmented matrix [A|b], consistency conditions and solution types." },
                    { id: "la-ref-gauss", title: "Row Echelon Form (REF), Rank & Gauss Elimination", desc: "Elementary row operations, leading entries (pivots), rank calculation, forward Gaussian elimination." },
                    { id: "la-rref-gauss-jordan", title: "Reduced Row Echelon Form (RREF) & Gauss-Jordan", desc: "Unique RREF, Gauss-Jordan elimination, matrix inversion [A | I] -> [I | A^-1]." },
                    { id: "la-homogeneous", title: "Homogeneous Systems of Linear Equations", desc: "Ax = 0, always consistent, trivial vs non-trivial solutions, free variables and nullity." },
                    { id: "la-non-homogeneous", title: "Non-Homogeneous Systems & Solution Sets", desc: "General solution x = x_p + x_h (particular + null space solution), Rouché-Capelli rank theorem." }
                ]
            },
            {
                name: "2. Applications of Linear Systems",
                topics: [
                    { id: "la-app-resources-chem", title: "Resource Allocation & Balancing Chemical Reactions", desc: "Setting up simultaneous equations for multi-variable raw material constraints and stoichiometry." },
                    { id: "la-app-networks-circuits", title: "Network Analysis & Electrical Networks", desc: "Flow conservation at network junctions (traffic flow), Kirchhoff's Current Law (KCL) and Voltage Law (KVL)." },
                    { id: "la-app-leontief", title: "Linear Economic Models (Leontief Input-Output)", desc: "Production vectors, internal consumption matrix C, external demand vector d, solving (I - C)x = d." }
                ]
            },
            {
                name: "3. Eigenvalues, Eigenvectors & Diagonalization",
                topics: [
                    { id: "la-eigen-intro", title: "Introduction to Eigenvalues & Eigenvectors", desc: "Definition Av = λv (v ≠ 0), characteristic polynomial det(A - λI) = 0, trace and det relations." },
                    { id: "la-eigen-nxn", title: "Eigenvalues & Eigenvectors of n x n Matrices", desc: "Finding eigenspaces Null(A - λI), Algebraic Multiplicity (AM) vs Geometric Multiplicity (GM)." },
                    { id: "la-similar-diagonalization", title: "Similar Matrices & Matrix Diagonalization", desc: "Similarity transform B = P^-1 A P, conditions for diagonalizability (n linearly independent eigenvectors)." }
                ]
            },
            {
                name: "4. Dynamical Systems & Differential Equations",
                topics: [
                    { id: "la-markov-chains", title: "Markov Chains & Steady-State Vectors", desc: "Stochastic transition matrices (column sums = 1), state vectors x_k, regular Markov chains, finding steady-state vector Pq = q." },
                    { id: "la-population-growth", title: "Population Growth Models", desc: "Leslie matrix models for age-structured populations, dominant eigenvalue determining long-term growth." },
                    { id: "la-diff-eqs-systems", title: "Systems of Linear Differential Equations", desc: "Vector differential equation x'(t) = A x(t), decoupling using eigenvalues/eigenvectors, general solution formula." },
                    { id: "la-discrete-dyn-systems", title: "Discrete Linear Dynamical Systems", desc: "State evolution x_{k+1} = A x_k, attractor/sink (|λ| < 1), repeller/source (|λ| > 1), saddle point behavior." }
                ]
            },
            {
                name: "5. Vector Spaces, Basis & Dimension",
                topics: [
                    { id: "la-vector-spaces-subspaces", title: "Vector Spaces & Subspaces", desc: "10 vector space axioms, subspace test (contains 0, closed under vector addition and scalar multiplication)." },
                    { id: "la-span-independence", title: "Spanning Sets & Linear Independence", desc: "Span{v1, ..., vk}, testing linear independence (c1*v1 + ... + ck*vk = 0 implies only ci = 0)." },
                    { id: "la-basis-dimension", title: "Basis and Dimension", desc: "Basis as a minimal spanning set and maximal independent set, dimension of vector spaces." }
                ]
            },
            {
                name: "6. Linear Transformations",
                topics: [
                    { id: "la-linear-transformations", title: "Linear Transformations & Properties", desc: "Mapping T: V -> W, linearity criteria T(u+v) = T(u)+T(v) and T(cu) = cT(u), zero vector preservation." },
                    { id: "la-kernel-range-rank-nullity", title: "Kernel, Range & Rank-Nullity Theorem", desc: "Ker(T) = {v | T(v)=0}, Range(T), Dimension Theorem: dim(Ker(T)) + dim(Range(T)) = dim(V)." },
                    { id: "la-matrix-linear-trans", title: "Matrix of a Linear Transformation", desc: "Standard matrix [T], coordinate vectors relative to arbitrary bases B and B', change of basis matrix." }
                ]
            }
        ]
    },
    {
        id: "discrete",
        name: "Discrete Mathematics",
        shortName: "DM",
        examDate: "2026-10-06",
        examDateDisplay: "6 Oct 2026",
        icon: "🔢",
        color: "#7c3aed",
        glow: "rgba(124, 58, 237, 0.2)",
        modules: [
            {
                name: "Module: Relations",
                topics: [
                    { id: "dm-relations-properties", title: "Relations & Properties (Sec 9.1)", desc: "Reflexive (∀a: aRa), Symmetric (aRb -> bRa), Antisymmetric (aRb & bRa -> a=b), Transitive; composite relations S ∘ R, powers R^n." },
                    { id: "dm-matrix-digraph", title: "Matrix & Digraph Representations (Sec 9.3)", desc: "0-1 boolean matrices, digraphs, checking properties visually, boolean matrix product for composite relations." },
                    { id: "dm-equivalence-relations", title: "Equivalence Relations, Classes & Partitions (Sec 9.5)", desc: "Equivalence (Reflexive + Symmetric + Transitive), equivalence classes [a], partitions of a set." },
                    { id: "dm-poset-hasse", title: "Partial Orderings, Posets & Hasse Diagrams (Sec 9.6)", desc: "Poset (Reflexive + Antisymmetric + Transitive), comparable vs incomparable elements, total order, lexicographic order." },
                    { id: "dm-hasse-extremals", title: "Hasse Diagram Extremal Elements (Sec 9.6)", desc: "Maximal and minimal elements, greatest element (maximum) vs least element (minimum), upper/lower bounds, LUB & GLB." }
                ]
            },
            {
                name: "Module: Induction and Recursion",
                topics: [
                    { id: "dm-weak-induction", title: "First (Weak) Mathematical Induction (Sec 5.1)", desc: "Basis step P(1), Inductive hypothesis P(k), Inductive step P(k) -> P(k+1); proofs for sums and inequalities." },
                    { id: "dm-strong-induction", title: "Second (Strong) Mathematical Induction (Sec 5.2)", desc: "Basis step, Inductive hypothesis [P(1) ∧ ... ∧ P(k)] -> P(k+1); Well-Ordering Property." },
                    { id: "dm-recursion-funcs", title: "Recursively Defined Functions (Sec 5.3)", desc: "Base case and recursive rule, Fibonacci sequence definition, recursively defined sets and structural induction." },
                    { id: "dm-recurrence-homo", title: "Linear Recurrence: Homogeneous Solutions (Sec 8.2)", desc: "Characteristic equation: Case 1 (real distinct roots: a_n = α1*r1^n + α2*r2^n); Case 2 (real repeated roots: a_n = (α1 + α2*n)*r^n)." },
                    { id: "dm-recurrence-nonhomo", title: "Linear Recurrence: Non-Homogeneous Solutions (Sec 8.2)", desc: "General solution a_n = a_n^(h) + a_n^(p); Case i: F(n)=const; Case ii: F(n)=c*a^n; Case iii: F(n)=polynomial." }
                ]
            },
            {
                name: "Module: Number Theory & Cryptography",
                topics: [
                    { id: "dm-divisibility-modulo", title: "Divisibility Theorems & Modular Arithmetic (Sec 4.1)", desc: "Divisibility rules (a|b, a|c -> a|(sb+tc)), division algorithm: a = dq + r (0 <= r < d), a div d and a mod d." },
                    { id: "dm-primes-fta", title: "Primes, Fundamental Theorem & Mersenne Primes (Sec 4.3)", desc: "Unique prime factorization, Mersenne primes (2^p - 1), infinitude of primes." },
                    { id: "dm-gcd-euclidean", title: "GCD, LCM & Euclidean Algorithm (Sec 4.3)", desc: "Relation gcd(a,b)*lcm(a,b) = a*b, Euclidean division algorithm steps to systematically compute GCD." },
                    { id: "dm-bezout-theorem", title: "Bézout's Theorem & Extended Euclidean (Sec 4.3)", desc: "Finding integers s and t such that sa + tb = gcd(a,b), expressing gcd as a linear combination." },
                    { id: "dm-linear-congruence", title: "Linear Congruence Equations & Inverses (Sec 4.4)", desc: "Finding modular inverse of a modulo m using Bézout; solving single linear congruence ax ≡ b (mod m)." },
                    { id: "dm-crt-flt", title: "Chinese Remainder Theorem & Fermat's Little Theorem (Sec 4.4)", desc: "CRT simultaneous congruences formula with pairwise coprime moduli; Fermat's Little Theorem (a^(p-1) ≡ 1 mod p); pseudoprimes." },
                    { id: "dm-congruence-apps", title: "Applications of Congruences (Sec 4.5)", desc: "Hashing functions h(k)=k mod m, PRNGs (Linear Congruential Method), parity check bits, UPC, ISBN-10, USPS, ISSN." },
                    { id: "dm-cryptography", title: "Classical Cryptography (Sec 4.6)", desc: "Caesar cipher, Shift cipher f(p)=(p+k) mod 26, Affine cipher f(p)=(ap+b) mod 26 with gcd(a,26)=1, Transposition block ciphers." }
                ]
            }
        ]
    },
    {
        id: "dsa",
        name: "Data Structures & Algorithms",
        shortName: "DSA",
        examDate: "2026-10-07",
        examDateDisplay: "7 Oct 2026",
        icon: "💻",
        color: "#059669",
        glow: "rgba(5, 150, 105, 0.2)",
        modules: [
            {
                name: "1. Foundations & Classification",
                topics: [
                    { id: "dsa-intro", title: "Motivation & Need for Data Structures", desc: "Role of DS in efficient searching, indexing, memory optimization, and algorithmic throughput." },
                    { id: "dsa-classification", title: "Classification of Data Structures", desc: "Primitive vs Non-Primitive; Linear (Arrays, Stacks, Queues, Linked Lists) vs Non-Linear (Trees, Graphs); Static vs Dynamic." }
                ]
            },
            {
                name: "2. Algorithm Analysis & Asymptotic Notations",
                topics: [
                    { id: "dsa-algo-notion", title: "Brief Idea of Algorithms & Properties", desc: "Algorithmic properties: Finiteness, Definiteness, Input, Output, Feasibility/Effectiveness." },
                    { id: "dsa-complexity", title: "Time and Space Complexity Analysis", desc: "Counting fundamental operations, auxiliary memory space, worst-case, average-case, and best-case performance." },
                    { id: "dsa-asymptotic", title: "Asymptotic Notations", desc: "Formal mathematical definitions of Big-O (O), Big-Omega (Ω), Big-Theta (Θ), small-o (o), and small-omega (ω)." }
                ]
            },
            {
                name: "3. Arrays & Memory Layout",
                topics: [
                    { id: "dsa-arrays-1d-2d", title: "1-D and 2-D Arrays", desc: "Contiguous memory layout, base address, index computation, cache locality benefits." },
                    { id: "dsa-ordering-formulas", title: "Multi-Dimensional Array Address Calculations", desc: "Row-Major Ordering (RMO): Base + [i * n + j] * size; Column-Major Ordering (CMO): Base + [j * m + i] * size." }
                ]
            },
            {
                name: "4. Searching Algorithms",
                topics: [
                    { id: "dsa-linear-search", title: "Linear Search", desc: "Sequential examination, worst-case O(n), best-case O(1), suitable for unsorted data." },
                    { id: "dsa-binary-search", title: "Binary Search", desc: "Divide and conquer on sorted data, mid calculation, iterative vs recursive formulation, O(log n)." }
                ]
            },
            {
                name: "5. Sorting Algorithms & Analysis",
                topics: [
                    { id: "dsa-bubble-sort", title: "Bubble Sort", desc: "Repeated adjacent swaps, sinking largest element, swapped flag optimization, O(n^2) worst, O(n) best." },
                    { id: "dsa-selection-sort", title: "Selection Sort", desc: "Finding minimum from unsorted sub-array and placing at front, minimum swaps O(n), always O(n^2), unstable." },
                    { id: "dsa-insertion-sort", title: "Insertion Sort", desc: "Incremental card placement, adaptive O(n) for nearly-sorted data, stable, O(n^2) worst." },
                    { id: "dsa-merge-sort", title: "Merge Sort", desc: "Divide and conquer, two-way merging, recurrence T(n) = 2T(n/2) + O(n), guaranteed O(n log n), stable, O(n) space." },
                    { id: "dsa-quick-sort", title: "Quick Sort", desc: "Partitioning around pivot (Lomuto vs Hoare), worst-case O(n^2) for sorted arrays, expected O(n log n), in-place, unstable." },
                    { id: "dsa-sort-comparison", title: "Comparison-Based Sorting Analysis", desc: "Decision tree lower bound of Ω(n log n), stability comparison, in-place vs extra auxiliary memory tradeoffs." }
                ]
            },
            {
                name: "6. Stack Data Structure",
                topics: [
                    { id: "dsa-stack-concept", title: "Stack Concept & Primitive Operations", desc: "LIFO principle, Top pointer, Push, Pop, Peek/Top, isEmpty, isFull (array & linked list representations)." },
                    { id: "dsa-stack-apps", title: "Applications of Stack", desc: "Infix to Postfix/Prefix conversion, Postfix evaluation, balanced parentheses checking, recursion call stack." }
                ]
            },
            {
                name: "7. Queue Data Structure",
                topics: [
                    { id: "dsa-queue-concept", title: "Queue Concept & Primitive Operations", desc: "FIFO principle, Front and Rear pointers, Enqueue, Dequeue, Peek (array & linked list representations)." },
                    { id: "dsa-queue-variants-apps", title: "Queue Variants & Applications", desc: "Circular Queue (preventing false overflow using modulo arithmetic), Deque, Priority Queue, BFS, CPU scheduling." }
                ]
            },
            {
                name: "8. Linked Lists",
                topics: [
                    { id: "dsa-singly-ll", title: "Singly Linked List", desc: "Node structure (data + next), head pointer, insertion (start, mid, end), deletion, search, reversal." },
                    { id: "dsa-doubly-ll", title: "Doubly Linked List", desc: "Node structure (data + prev + next), bidirectional traversal, deletion and insertion edge cases." },
                    { id: "dsa-circular-ll", title: "Circular & Doubly Circular Linked Lists", desc: "Last node links back to head, circular navigation, round-robin playlist/scheduling applications." },
                    { id: "dsa-ll-applications", title: "Linked List Applications", desc: "Dynamic memory allocation, polynomial representation and algebraic addition, sparse matrices." }
                ]
            }
        ]
    },
    {
        id: "da",
        name: "Data Analytics (DA)",
        shortName: "DA",
        examDate: "2026-10-08",
        examDateDisplay: "8 Oct 2026",
        icon: "📊",
        color: "#2563eb",
        glow: "rgba(37, 99, 235, 0.2)",
        modules: [
            {
                name: "1. Data Understanding & Exploratory Analysis (EDA)",
                topics: [
                    { id: "da-intro-lifecycle", title: "Data Analytics Life Cycle & Types", desc: "Descriptive, Diagnostic, Predictive, and Prescriptive analytics; data preprocessing steps." },
                    { id: "da-data-types-cleaning", title: "Data Types & Data Cleaning", desc: "Structured, semi-structured, unstructured; handling missing values, imputation techniques, outlier detection (IQR, Z-score)." },
                    { id: "da-eda-visualization", title: "Exploratory Data Analysis & Visualization", desc: "Summary statistics, histograms, box plots, scatter plots, correlation heatmaps, feature distributions." }
                ]
            },
            {
                name: "2. Statistical Foundations & Probability",
                topics: [
                    { id: "da-descriptive-stats", title: "Measures of Central Tendency & Dispersion", desc: "Mean, median, mode, variance, standard deviation, skewness, kurtosis, quartiles." },
                    { id: "da-probability-distributions", title: "Probability Distributions", desc: "Discrete (Binomial, Poisson) and Continuous (Normal / Gaussian distribution, Standard Normal Z-table, Central Limit Theorem)." },
                    { id: "da-hypothesis-testing", title: "Hypothesis Testing & Significance", desc: "Null hypothesis (H0) vs Alternative (H1), Type I and Type II errors, p-value interpretation, Z-test, t-test, Chi-square test." }
                ]
            },
            {
                name: "3. Predictive Modeling & Regression",
                topics: [
                    { id: "da-linear-regression", title: "Simple & Multiple Linear Regression", desc: "Least squares estimation, slope & intercept formula, R-squared and Adjusted R-squared, assumptions of regression." },
                    { id: "da-logistic-classification", title: "Classification & Logistic Regression", desc: "Sigmoid function, odds ratio, decision boundary, confusion matrix, precision, recall, F1-score, ROC-AUC curve." },
                    { id: "da-clustering-dim-reduction", title: "Clustering & Dimensionality Reduction", desc: "K-Means clustering algorithm (Elbow method), Hierarchical clustering, PCA (Principal Component Analysis) concepts." }
                ]
            }
        ]
    },
    {
        id: "java",
        name: "Java (OOPs)",
        shortName: "OOPS",
        examDate: "2026-10-09",
        examDateDisplay: "9 Oct 2026 (Morning)",
        icon: "☕",
        color: "#d97706",
        glow: "rgba(217, 119, 6, 0.2)",
        modules: [
            {
                name: "1. Java Environment & OOP Foundation",
                topics: [
                    { id: "java-characteristics", title: "Characteristics of Java & Environment", desc: "Platform independence (WORA), Architecture Neutral, Robust, Secure, Multithreaded, Distributed." },
                    { id: "java-runtime-jvm", title: "JDK, JRE, JVM & JIT Compiler", desc: "JDK tools (javac, jar), JRE libraries, JVM execution engine, ClassLoader, JIT compiler (bytecode to native code)." },
                    { id: "java-oop-principles", title: "OOP Principles in Java", desc: "Encapsulation (data hiding), Abstraction (interfaces/abstract classes), Inheritance, Polymorphism." },
                    { id: "java-lifecycle", title: "Lifecycle of a Java Program & First Program", desc: "Source (.java) -> javac -> Bytecode (.class) -> JVM execution; public static void main(String[] args)." }
                ]
            },
            {
                name: "2. Fundamental Programming Structures",
                topics: [
                    { id: "java-tokens-types", title: "Identifiers, Literals, Comments & Data Types", desc: "Identifier rules, reserved keywords, primitive types (byte, short, int, long, float, double, char, boolean)." },
                    { id: "java-variables-casts", title: "Variables, Scope, Lifetime & Type Conversion", desc: "Local, instance, and static variables; implicit widening conversion vs explicit narrowing type casting." },
                    { id: "java-operators", title: "Operators & Expressions", desc: "Arithmetic, relational, logical (short-circuit && and ||), bitwise, shift, ternary operator, precedence." },
                    { id: "java-control-flow", title: "Control Flow: Conditionals & Switches", desc: "if-else-if ladder, nested if, switch-case with constants/enums/strings, switch fall-through and break." },
                    { id: "java-loops-jumps", title: "Loops & Jump Statements", desc: "while, do-while, standard for, enhanced for-each, labeled break, continue, return." }
                ]
            },
            {
                name: "3. Classes, Objects & Core Implementations",
                topics: [
                    { id: "java-classes-objects", title: "Defining Classes & Creating Objects", desc: "Class declaration, fields, methods, new keyword, reference variables, heap vs stack allocation." },
                    { id: "java-methods-constructors", title: "Methods & Constructors", desc: "Method signature, return types, pass-by-value semantics, default constructors, parameterized constructors." },
                    { id: "java-overloading", title: "Method & Constructor Overloading", desc: "Compile-time polymorphism: varying number, types, or order of parameters; return type alone is insufficient." },
                    { id: "java-this-keyword", title: "The `this` Keyword", desc: "Referencing current object instance fields (resolving variable shadowing), constructor chaining using this()." },
                    { id: "java-static-members", title: "Static Members (Variables, Methods, Blocks)", desc: "Class-level shared memory, static methods cannot use this/super, static initialization block order." },
                    { id: "java-nested-classes", title: "Nested Classes", desc: "Static nested classes vs Inner member classes, access permissions to outer class enclosing scope." },
                    { id: "java-arrays", title: "Arrays in Java", desc: "Array declaration, allocation, initialization, 1-D, 2-D matrices, ragged/jagged arrays, .length property." },
                    { id: "java-strings", title: "Strings, StringBuffer & StringBuilder", desc: "String immutability, String Constant Pool (SCP), equals() vs ==, thread-safe StringBuffer vs StringBuilder." },
                    { id: "java-scanner", title: "Scanner Class", desc: "java.util.Scanner: nextInt(), nextDouble(), next(), nextLine() line-break consumption issues." },
                    { id: "java-wrapper-classes", title: "Wrapper Classes & Autoboxing", desc: "Integer, Double, Character, Boolean; automatic boxing and unboxing between primitives and objects." }
                ]
            }
        ]
    },
    {
        id: "dld",
        name: "Digital Logic Design",
        shortName: "DLD",
        examDate: "2026-10-09",
        examDateDisplay: "9 Oct 2026 (Afternoon)",
        icon: "⚡",
        color: "#0284c7",
        glow: "rgba(2, 132, 199, 0.2)",
        modules: [
            {
                name: "1. Introduction to Digital Circuits & Signals",
                topics: [
                    { id: "dld-intro", title: "Introduction to Digital Circuits", desc: "Definitions, nature of analog vs discrete-time vs digital signals, amplitude and time quantization." },
                    { id: "dld-adv-disadv", title: "Advantages & Disadvantages of Digital Circuits", desc: "Noise immunity, storage efficiency, ease of design vs quantization error and ADC conversion complexity." }
                ]
            },
            {
                name: "2. Number Systems & Representations",
                topics: [
                    { id: "dld-number-bases", title: "Number Systems: Binary, Octal, Decimal, Hexadecimal", desc: "Radix/base representation, positional weights, converting integer and fractional numbers between systems." },
                    { id: "dld-conversions", title: "System Conversions", desc: "Repeated division/multiplication methods, grouping bits for binary-octal (3-bit) and binary-hex (4-bit) conversion." },
                    { id: "dld-complements", title: "1's and 2's Complement Representations", desc: "Signed binary numbers, subtraction using 1's and 2's complements, overflow detection." }
                ]
            },
            {
                name: "3. Binary Codes",
                topics: [
                    { id: "dld-weighted-nonweighted", title: "Weighted and Non-Weighted Codes", desc: "Positional weight property: BCD (8421, 2421, 5421) vs non-weighted codes (Excess-3, Gray code)." },
                    { id: "dld-bcd", title: "BCD (Binary Coded Decimal)", desc: "BCD encoding (0-9), invalid states (10-15), BCD addition and correction (+6 / +0110 rule)." },
                    { id: "dld-excess3", title: "Excess-Three (XS-3) Code", desc: "Adding 0011 to BCD, self-complementing property for 9's complement, arithmetic with Excess-3." },
                    { id: "dld-gray", title: "Gray Code (Reflected Binary)", desc: "Unit-distance code, elimination of race conditions, binary-to-Gray conversion (XOR with right shift) and Gray-to-binary." },
                    { id: "dld-ascii", title: "ASCII Code", desc: "7-bit and 8-bit alphanumeric character encoding, control characters, parity bit integration." }
                ]
            },
            {
                name: "4. Logic Gates and Functions",
                topics: [
                    { id: "dld-gate-tables", title: "Logic Gates & Truth Tables", desc: "Functions, representations, and truth tables of basic gates (AND, OR, NOT) and derived gates (NAND, NOR, XOR, XNOR)." },
                    { id: "dld-universal-gates", title: "Universal Logic Gates (NAND & NOR)", desc: "Implementing NOT, AND, OR, XOR, and XNOR using exclusively NAND gates or exclusively NOR gates." },
                    { id: "dld-combining-gates", title: "Circuit Synthesis for Simple Logic Functions", desc: "Deriving gate-level circuits from boolean expressions and truth tables." }
                ]
            },
            {
                name: "5. Boolean Algebra & Minimization Techniques",
                topics: [
                    { id: "dld-boolean-algebra", title: "Boolean Algebra Axioms & Theorems", desc: "Huntington's postulates, Commutative, Associative, Distributive, Identity, Complement, Involution, De Morgan's laws." },
                    { id: "dld-reduction", title: "Reduction of Gate Count by Simplification", desc: "Algebraic reduction, Canonical SOP (minterms) and POS (maxterms), standard forms." },
                    { id: "dld-kmaps", title: "Karnaugh Maps (K-Maps) Simplification", desc: "2, 3, and 4 variable K-Maps, Gray code ordering, grouping rules (pairs, quads, octets), Don't Care (X) conditions." },
                    { id: "dld-tabulation", title: "Tabulation Method (Quine-McCluskey)", desc: "Algorithmic tabular minimization, grouping by number of 1s, finding prime implicants, prime implicant chart, essential prime implicants." }
                ]
            },
            {
                name: "6. Combinational Circuits",
                topics: [
                    { id: "dld-mux-demux", title: "Multiplexers & Demultiplexers", desc: "2:1, 4:1, 8:1 MUX architecture, select lines, implementing any logic function using MUX; 1:2, 1:4, 1:8 DEMUX." },
                    { id: "dld-encoders-decoders", title: "Encoders & Decoders", desc: "Priority encoders (resolving multiple active inputs), 2-to-4 and 3-to-8 line decoders with active-low/high enable lines." },
                    { id: "dld-arithmetic", title: "Arithmetic Circuits: Adders & Subtracters", desc: "Half Adder, Full Adder (using gates and universal gates), Half Subtractor, Full Subtractor, 4-bit Parallel Adder/Subtractor." }
                ]
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EXAM_SCHEDULE, SYLLABUS_DATA };
}

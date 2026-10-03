# 🗓️ Mid-Semester Exam Preparation & Schedule Checklist

> **Exam Schedule (Oct 2026)**:
> 1. 📐 **LA&DE** — **5 Oct** (Sunday/Monday - First Exam!)
> 2. 🔢 **Discrete Mathematics** / ⚛️ **Quantum Mechanics (Electives)** — **6 Oct**
> 3. 💻 **DSA** — **7 Oct**
> 4. 📊 **DA (Data Analytics)** — **8 Oct**
> 5. ☕ **Java (OOPs)** — **9 Oct (Morning)**
> 6. ⚡ **DLD (Digital Logic Design)** — **9 Oct (Afternoon)**

---

## 📐 Exam 1: Linear Algebra & Differential Equations (5 Oct)

### 1. Systems of Linear Equations & Elimination
- [ ] **Linear Systems & Matrix Representation** ($Ax = b$, coefficient matrix, augmented matrix $[A \mid b]$)
- [ ] **Row Echelon Form (REF), Rank & Gauss Elimination** (Elementary row operations, leading entries, rank)
- [ ] **Reduced Row Echelon Form (RREF) & Gauss-Jordan** (Unique RREF, solving linear systems, matrix inversion)
- [ ] **Homogeneous Systems of Linear Equations ($Ax = 0$)** (Augmented matrix $[A \mid 0]$, guaranteed consistency, elementary row operations, null space $\operatorname{Null}(A)$ and nullity)
- [ ] **Trivial & Non-Trivial Solutions in Homogeneous Equations** (Trivial zero solution $x = 0$ always exists; condition for non-trivial solutions: at least one free variable, $\operatorname{Rank}(A) < n$, $\det(A) = 0$ for square matrices, writing solutions in parametric vector form $x = s \cdot v_1 + t \cdot v_2$)
- [ ] **Non-Homogeneous Systems** (Consistency criterion, particular solution + null space solution)

### 2. Applications of Linear Systems
- [ ] **Allocation of Resources** (Formulating multi-variable resource constraint equations)
- [ ] **Balancing Chemical Equations** (Balancing atomic counts across chemical reactions)
- [ ] **Network Analysis & Traffic Flow** (Flow conservation at network junctions)
- [ ] **Electrical Networks** (Kirchhoff's Current Law KCL & Voltage Law KVL)
- [ ] **Linear Economic Models** (Leontief Input-Output model, $(I - C)x = d$)

### 3. Eigenvalues, Eigenvectors & Diagonalization
- [ ] **Eigenvalue & Eigenvector Concepts** ($Av = \lambda v$, characteristic equation $\det(A - \lambda I) = 0$)
- [ ] **Eigenvalues/Eigenvectors of $n \times n$ Matrices** (Finding eigenspaces $\operatorname{Null}(A - \lambda I)$, AM vs GM)
- [ ] **Similar Matrices & Diagonalization** ($P^{-1}AP = D$, conditions for diagonalizability)

### 4. Dynamical Systems & Differential Equations
- [ ] **Markov Chains** (Stochastic transition matrices, steady-state probability vector $Pq = q$)
- [ ] **Population Growth Models** (Leslie matrix models, age-structured populations)
- [ ] **Systems of Linear Differential Equations** ($\mathbf{x}'(t) = A\mathbf{x}(t)$, decoupling via eigensystem)
- [ ] **Discrete Linear Dynamical Systems** ($\mathbf{x}_{k+1} = A\mathbf{x}_k$, trajectories, stability analysis)

### 5. Vector Spaces, Basis & Dimension
- [ ] **Vector Spaces & Subspaces** (Axioms, subspace test: zero vector, addition closure, scalar multiplication closure)
- [ ] **Spanning Sets & Linear Independence** ($\operatorname{Span}\{v_1, \dots, v_k\}$, linear independence test)
- [ ] **Basis & Dimension** (Linearly independent spanning set, standard bases, dimension of subspaces)

### 6. Linear Transformations
- [ ] **Linear Transformations** ($T(u+v) = T(u) + T(v)$, $T(cu) = cT(u)$, properties)
- [ ] **Kernel, Range & Rank-Nullity Theorem** ($\operatorname{Ker}(T)$, $\operatorname{Range}(T)$, $\dim(\operatorname{Ker}) + \dim(\operatorname{Range}) = \dim(V)$)
- [ ] **Matrix of a Linear Transformation** (Standard matrix $[T]$ relative to given bases)

---

## 🔢 Exam 2: Discrete Mathematics (6 Oct)

### Module: Relations
- [ ] **Properties of Relations** (Reflexive, Symmetric, Antisymmetric, Transitive) (Sec 9.1)
- [ ] **Combining Relations** (Union, intersection, composite relation $S \circ R$, powers $R^n$) (Sec 9.1)
- [ ] **Matrix & Digraph Representation** (Zero-One matrix $M_R$, directed graph representation) (Sec 9.3)
- [ ] **Combining Relations via Matrices** (Boolean matrix product $M_{S \circ R} = M_R \odot M_S$) (Sec 9.3)
- [ ] **Equivalence Relations & Partitions** (Equivalence classes $[a]$, partitions of a set) (Sec 9.5)
- [ ] **Partial Ordering Relations & Posets** (Reflexive, antisymmetric, transitive; comparable/incomparable, lexicographic order) (Sec 9.6)
- [ ] **Hasse Diagrams & Extremal Elements** (Maximal, Minimal, Greatest, Least elements; Upper/Lower bounds, LUB and GLB) (Sec 9.6)

### Module: Induction and Recursion
- [ ] **First (Weak) Principle of Mathematical Induction** (Basis step $P(1)$, Inductive step $P(k) \to P(k+1)$) (Sec 5.1)
- [ ] **Second (Strong) Principle of Induction** (Basis step, $[P(1) \land \dots \land P(k)] \to P(k+1)$, Well-ordering property) (Sec 5.2)
- [ ] **Recursively Defined Functions & Sets** (Base step, recursive step, Fibonacci sequence) (Sec 5.3)
- [ ] **Solving Homogeneous Linear Recurrence Relations** (Characteristic equation: real distinct roots, real repeated roots) (Sec 8.2)
- [ ] **Solving Non-Homogeneous Linear Recurrence Relations** (Particular solutions: $F(n) = c$, $F(n) = c \cdot a^n$, $F(n) = \text{poly}(n)$) (Sec 8.2)

### Module: Number Theory and Cryptography
- [ ] **Divisibility & Modular Arithmetic** (Divisibility theorems, Division algorithm, $a \text{ div } d$, $a \bmod d$) (Sec 4.1)
- [ ] **Primes & Fundamental Theorem of Arithmetic** (Prime factorization uniqueness, Mersenne primes $2^p - 1$) (Sec 4.3)
- [ ] **GCD, LCM & Euclidean Algorithm** (Relationship $a \cdot b = \gcd(a,b) \cdot \operatorname{lcm}(a,b)$, Euclidean algorithm steps) (Sec 4.3)
- [ ] **Bézout's Theorem & Linear Combinations** (Extended Euclidean algorithm, finding coefficients $sa + tb = \gcd(a,b)$) (Sec 4.3)
- [ ] **Linear Congruences & Modular Inverses** (Solving $ax \equiv b \pmod m$, finding $a^{-1} \pmod m$) (Sec 4.4)
- [ ] **Chinese Remainder Theorem (CRT)** (System of simultaneous congruences) (Sec 4.4)
- [ ] **Fermat's Little Theorem & Pseudoprimes** ($a^{p-1} \equiv 1 \pmod p$, pseudoprimes to base $b$) (Sec 4.4)
- [ ] **Applications of Congruences** (Hashing functions, pseudorandom numbers, parity check bits, UPC, ISBN-10, USPS, ISSN) (Sec 4.5)
- [ ] **Classical Cryptography** (Caesar cipher, Shift cipher, Affine cipher $f(p)=(ap+b)\bmod 26$, Transposition/Block cipher) (Sec 4.6)

---

## ⚛️ Exam 2 (Elective Track B): Quantum Mechanics & Computing (6 Oct)
*(Elective paper on 6 Oct: for students taking Quantum Mechanics & Computing instead of or alongside Discrete Math)*

### 1. Basic Concepts of Quantum Mechanics
- [ ] **Particles and Waves & Wave-Particle Duality** (De Broglie hypothesis $\lambda = h/p$, photoelectric effect, Compton scattering, Davisson-Germer electron diffraction, dual nature of radiation and matter)
- [ ] **Heisenberg Uncertainty Principle** (Position-momentum limit $\Delta x \cdot \Delta p \ge rac{\hbar}{2}$, energy-time limit $\Delta E \cdot \Delta t \ge rac{\hbar}{2}$, zero-point energy, non-existence of electrons in nucleus)
- [ ] **Wavefunctions & Born's Probabilistic Interpretation** (Physical meaning of wavefunction $\psi(x,t)$, probability density $|\psi|^2$, normalization $\int_{-\infty}^\infty |\psi|^2 dx = 1$, continuity and single-valued boundary conditions)
- [ ] **Superposition Principle & State Expansion** (Linear combination of stationary eigenstates, probability amplitudes, measurement postulate, state collapse from superposition to basis state)
- [ ] **Schrödinger Equation (TDSE & TISE)** (Time-Dependent vs Time-Independent equations, Hamiltonian operator $\hat{H}\psi = E\psi$, particle in a 1D infinite potential well, energy quantization $E_n = rac{n^2 \pi^2 \hbar^2}{2mL^2}$)
- [ ] **Quantum Operators & Expectation Values** (Hermitian operators: position $\hat{x}=x$, momentum $\hat{p} = -i\hbar rac{\partial}{\partial x}$, Hamiltonian $\hat{H}$, commutation relation $[\hat{x}, \hat{p}] = i\hbar$, expectation values $\langle A 
angle$)
- [ ] **Quantum Tunneling & Potential Barriers** (Particle incident on finite barrier $E < V_0$, evanescent decay, transmission coefficient $T pprox e^{-2\kappa a}$, applications: alpha decay, scanning tunneling microscope STM)
- [ ] **Quantum Entanglement & Bell States** (Composite quantum states, entangled vs separable systems, EPR paradox, Bell's theorem, 4 Bell basis states $|\Phi^\pm
angle, |\Psi^\pm
angle$, quantum teleportation)

### 2. Classical vs Quantum Computing & Logic Gates
- [ ] **Classical vs Quantum Computing Architecture** (Comparison of classical Turing machines and quantum processors, deterministic vs probabilistic computation, exponential state space $2^n$ amplitudes for $n$ qubits)
- [ ] **Bits vs Qubits Representation** (Classical bit 0/1 vs quantum bit $|\psi
angle = lpha|0
angle + eta|1
angle$, complex probability amplitudes $|lpha|^2 + |eta|^2 = 1$, Dirac bra-ket notation, measurement projection)
- [ ] **Bloch Sphere Representation** (Geometric state mapping on unit sphere: $|\psi
angle = \cos(	heta/2)|0
angle + e^{i\phi}\sin(	heta/2)|1
angle$, north pole $|0
angle$, south pole $|1
angle$, equator superposition states $|+
angle, |-
angle, |+i
angle, |-i
angle$)
- [ ] **Single-Qubit Quantum Logic Gates** (Unitary matrices $U^\dagger U = I$: Pauli-X [NOT], Pauli-Y, Pauli-Z [phase flip], Hadamard $H$ [creates equal superposition], Phase gates $S$ and $T$)
- [ ] **Multi-Qubit Gates & CNOT (Controlled-NOT)** (CNOT matrix and truth table, control and target qubit action, Toffoli [CCNOT] gate, reversible computing, tensor products)
- [ ] **Quantum Circuits & Bell State Circuit** (Constructing quantum circuits: Hadamard on qubit 1 followed by CNOT targeting qubit 2 yields Bell state $|\Phi^+
angle$, No-Cloning Theorem)

---

## 💻 Exam 3: Data Structures & Algorithms (7 Oct)

### 1. Course Overview & Introduction
- [ ] **Motivation & Need for Data Structures** (Efficiency, memory organization)
- [ ] **Classification** (Primitive vs Non-primitive, Linear vs Non-linear, Static vs Dynamic)

### 2. Algorithm Analysis & Complexity
- [ ] **Concept of Algorithms** (Properties: finiteness, definiteness, input/output, effectiveness)
- [ ] **Time & Space Complexity** (Best, Average, and Worst-case bounds)
- [ ] **Asymptotic Notations** (Big-O $O$, Big-Omega $\Omega$, Big-Theta $\Theta$, Small-o $o$, Small-omega $\omega$)

### 3. Arrays (1-D, 2-D, Multi-Dimensional)
- [ ] **1-D & 2-D Arrays** (Memory layout, base address calculation)
- [ ] **Multi-Dimensional Arrays & Address Calculations** (Row-major order vs Column-major order address formulas)

### 4. Searching Algorithms
- [ ] **Linear Search** (Implementation, $O(n)$ time analysis)
- [ ] **Binary Search** (Iterative & recursive, preconditions, $O(\log n)$ analysis)

### 5. Sorting Algorithms & Comparison
- [ ] **Bubble Sort** (Adjacent comparisons, early-exit optimization, $O(n^2)$)
- [ ] **Selection Sort** (Finding minimums, unstable, $O(n^2)$)
- [ ] **Insertion Sort** (Online sorting, optimal for nearly-sorted data, $O(n)$ best case)
- [ ] **Merge Sort** (Divide and conquer, recurrence $T(n) = 2T(n/2) + O(n)$, $O(n \log n)$ stable)
- [ ] **Quick Sort** (Pivot selection, partitioning schemes, $O(n \log n)$ avg, $O(n^2)$ worst)
- [ ] **Performance Analysis of Sorting** (Comparison bounds $\Omega(n \log n)$, stability, in-place vs out-of-place)

### 6. Stack Data Structure
- [ ] **Stack Concept & Operations** (LIFO, Push, Pop, Peek/Top, isEmpty, isFull)
- [ ] **Applications of Stack** (Infix to Postfix/Prefix conversion, Postfix evaluation, Parentheses balancing, Function call recursion)

### 7. Queue Data Structure
- [ ] **Queue Concept & Operations** (FIFO, Enqueue, Dequeue, Front, Rear)
- [ ] **Queue Variants & Applications** (Circular Queue to prevent false overflow, Deque, Priority Queue, CPU scheduling, BFS)

### 8. Linked Lists
- [ ] **Singly Linked List** (Node structure, insertion at head/tail/pos, deletion, traversal)
- [ ] **Doubly Linked List** (Next and Prev pointers, bidirectional traversal, operations)
- [ ] **Circular Linked List & Doubly Circular Linked List** (Head-tail loop properties)
- [ ] **Applications of Linked Lists** (Dynamic memory allocation, polynomial addition)

---

## 📊 Exam 4: Data Analytics (DA) (8 Oct)

### Module 1: Introduction to Data Analytics and Python (5h: 3Th + 2 Lab | CO1 & CO2)
- [ ] **Data Analytics Concepts & Applications** (Core definition, role in decision making, business applications; Descriptive, Diagnostic, Predictive, Prescriptive analytics)
- [ ] **Data Science Lifecycle** (Problem definition, data acquisition/collection, data prep/cleaning, EDA, model building, validation & deployment)
- [ ] **Types of Data** (Structured, semi-structured, unstructured; qualitative [nominal, ordinal] vs quantitative [discrete, continuous] measurement scales)
- [ ] **Python Basics for Analytics** (Variables, primitive data types, control flow if/else & loops, functions, lambda expressions, list comprehensions)
- [ ] **Python File Handling** (File modes 'r', 'w', 'a', reading/writing text & CSV files, `with open(...) as f` context manager, file cursor methods)
- [ ] **Jupyter Notebook Environment** (Cell execution modes, command vs edit mode shortcuts, markdown syntax, kernel management, running shell commands)

### Module 2: Data Collection and Manipulation (7h: 4Th + 3 Lab | CO1, CO2 & CO3)
- [ ] **Data Collection, Preparation & Importing Datasets** (Importing datasets with Pandas `read_csv`, `read_excel`, `read_json`; dataset inspection `.head()`, `.info()`, `.describe()`, `.shape`)
- [ ] **Pandas Series & DataFrames Architecture** (1D Series vs 2D DataFrame structures, index manipulation, row/column slicing, label indexing `.loc` vs integer indexing `.iloc`)
- [ ] **Data Cleaning & Missing Value Handling** (Detecting missing values `.isna()`, `.isnull().sum()`, removal strategies `.dropna()`, imputation strategies `.fillna()` with mean/median/mode, forward/backward fill)
- [ ] **Data Filtering & Sorting** (Conditional filtering with boolean masks, compound conditions `&`, `|`, `~`, `.query()` method, `.sort_values()` and `.sort_index()`)
- [ ] **Grouping & Aggregation (GroupBy)** (Split-Apply-Combine methodology, `.groupby()`, multiple aggregations with `.agg()`, pivot tables `pd.pivot_table()`)
- [ ] **Merging, Joining & Concatenation** (Combining datasets: `pd.merge()` with inner, outer, left, right joins; `pd.concat()` along rows `axis=0` and columns `axis=1`, handling duplicate keys)
- [ ] **Data Transformation Techniques** (Mapping and replacements `.map()`, `.replace()`, `.apply()`, type casting `.astype()`, string operations `.str`, date parsing `pd.to_datetime()`)

### Module 3: Numerical Computing with NumPy (7h: 4Th + 3 Lab | CO1, CO2 & CO3)
- [ ] **Python Data Structures vs NumPy Arrays** (Limitations of Python lists, memory layout, cache efficiency, vectorization speedups, `ndarray` object attributes `.ndim`, `.shape`, `.dtype`)
- [ ] **NumPy Arrays: Creation, Indexing & Slicing** (Array creation `np.array`, `np.zeros`, `np.ones`, `np.arange`, `np.linspace`, `np.eye`; multi-dimensional indexing, slicing, boolean masking, fancy indexing)
- [ ] **Matrix Operations & Broadcasting Rules** (Element-wise arithmetic, matrix multiplication `np.dot`, `np.matmul`, `@` operator, transpose `.T`, inverse `np.linalg.inv()`, broadcasting rules across dimensions)
- [ ] **Mathematical & Statistical Functions in NumPy** (Universal functions `ufuncs`, aggregation along axes: `np.sum`, `np.mean`, `np.median`, `np.std`, `np.var`, `np.min`, `np.max`, `np.cumsum` with `axis=0` vs `axis=1`)
- [ ] **Feature Engineering with NumPy** (Min-Max normalization, Z-score standardization, log transformations `np.log1p`, percentile clipping `np.clip` for outlier suppression, polynomial feature generation)

### Module 4: Exploratory Data Analysis and Visualization (CO1, CO2 & CO3)
- [ ] **Exploratory Data Analysis (EDA) & Descriptive Statistics** (EDA workflow, summary statistics, measures of central tendency: mean, median, mode, trimmed mean; assessing skewness and distribution shape)
- [ ] **Population, Sample & Measures of Variability** (Population vs sample concepts, degrees of freedom `n-1`, range, Interquartile Range `IQR = Q3 - Q1`, variance, standard deviation, Box Plot outlier rules)
- [ ] **Hypothesis Testing & Significance** (Null hypothesis $H_0$ vs Alternative $H_1$, significance level $lpha$, Type I vs Type II errors, p-value decision rules, one-sample & two-sample t-tests, Z-test, Chi-square independence test)
- [ ] **Correlation Analysis & Covariance** (Covariance formula, Pearson linear correlation coefficient $r \in [-1, 1]$, Spearman rank correlation, correlation matrix, distinguishing correlation from causation)
- [ ] **Data Visualization using Matplotlib** (Figure and Axes object hierarchy, `plt.subplots()`, line plots, scatter plots, bar charts, histograms, customizing labels, legends, grid, saving figures `plt.savefig`)
- [ ] **Advanced Statistical Visualization with Seaborn** (Seaborn themes, distribution plots `histplot`, `kdeplot`; categorical plots `boxplot`, `violinplot`, `countplot`; correlation heatmaps `sns.heatmap` with `annot=True`, pair plots `sns.pairplot`, regression plots `sns.regplot`)

---

## ☕ Exam 5: Java (OOPs) (9 Oct - Morning)

### 1. Java Environment & OOP Foundation
- [ ] **Java Characteristics** (Platform independence, WORA, robust, secure, multithreaded)
- [ ] **Java Architecture** (JDK, JRE, JVM architecture, ClassLoader, JIT Compiler)
- [ ] **OOP Principles in Java** (Encapsulation, Abstraction, Inheritance, Polymorphism)
- [ ] **Lifecycle of a Java Program** (Compilation `.java` $\to$ `.class` bytecode $\to$ JVM interpretation/execution)
- [ ] **First Java Program** (Class syntax, `public static void main(String[] args)`, `System.out.println`)

### 2. Fundamental Programming Structures
- [ ] **Syntax Tokens** (Identifiers, Naming conventions, Literals, Comments)
- [ ] **Data Types & Variables** (Primitive data types, Scope and lifetime of variables)
- [ ] **Type Conversion** (Implicit widening and explicit narrowing casts)
- [ ] **Operators & Expressions** (Arithmetic, relational, logical, bitwise, assignment, ternary)
- [ ] **Control Flow: Conditionals** (if, if-else, nested if, switch statement)
- [ ] **Loops & Jump Statements** (for, while, do-while, enhanced for-each, break, continue, return)

### 3. Classes, Objects & Language Features
- [ ] **Defining Classes & Creating Objects** (`new` keyword, heap allocation, references)
- [ ] **Methods & Constructors** (Method signatures, default constructors, parameterized constructors)
- [ ] **Overloading** (Method overloading and Constructor overloading)
- [ ] **The `this` Keyword** (Referencing instance variables, invoking other constructors via `this()`)
- [ ] **Static Members** (Static variables, static methods, static initialization blocks)
- [ ] **Nested Classes** (Static nested classes vs Inner member classes)
- [ ] **Arrays in Java** (1-D, 2-D, and ragged arrays, `.length` field)
- [ ] **Strings in Java** (Immutability, String Constant Pool, `equals()` vs `==`, StringBuffer, StringBuilder)
- [ ] **Scanner Class** (`java.util.Scanner`, `nextInt()`, `nextLine()`, input parsing)
- [ ] **Wrapper Classes** (Integer, Double, Character, Autoboxing and Unboxing)

---

## ⚡ Exam 6: Digital Logic Design (DLD) (9 Oct - Afternoon)

### 1. Introduction to Digital Circuits & Signals
- [ ] **Introduction to Digital Circuits** (Basic concepts, representation)
- [ ] **Signal Types** (Analog, Discrete-time, and Digital signals)
- [ ] **Comparison** (Advantages and disadvantages of digital circuits over analog circuits)

### 2. Number Systems & Representation
- [ ] **Number System Bases** (Binary, Octal, Decimal, Hexadecimal systems)
- [ ] **Conversions** (Conversion between any pair of systems)
- [ ] **Complements** (1's and 2's complement representation of signed numbers, subtraction, overflow detection)

### 3. Binary Codes
- [ ] **Weighted vs Non-Weighted Codes** (Differences and classifications)
- [ ] **BCD Code** (Binary Coded Decimal / 8421, BCD addition rule)
- [ ] **Excess-3 Code** (Self-complementing property, BCD to Excess-3)
- [ ] **Gray Code** (Reflected binary, unit-distance code, Binary to Gray & Gray to Binary)
- [ ] **ASCII Code** (7-bit and 8-bit alphanumeric character encoding)

### 4. Logic Gates and Functions
- [ ] **Standard Gates** (Functions, symbols, representations, and truth tables of AND, OR, NOT, NAND, NOR, XOR, XNOR)
- [ ] **Universal Logic Gates** (Implementing NOT, AND, OR, XOR using ONLY NAND or ONLY NOR)
- [ ] **Gate Combinations** (Combining basic/universal gates to form simple logic functions)

### 5. Boolean Algebra & Minimization Techniques
- [ ] **Boolean Algebra Postulates & Theorems** (De Morgan's, Commutative, Distributive, Duality)
- [ ] **Algebraic Simplification** (Reduction of gate count and literal count)
- [ ] **K-Maps (Karnaugh Maps)** (Systematic simplification for 2, 3, and 4 variables, grouping pairs/quads/octets, Don't Care conditions)
- [ ] **Tabulation Method** (Quine-McCluskey method, prime implicants, essential prime implicant table)

### 6. Combinational Circuits
- [ ] **Multiplexers (MUX)** (2:1, 4:1, 8:1 MUX, function implementation using MUX)
- [ ] **Demultiplexers (DEMUX)** (1:2, 1:4, 1:8 DEMUX)
- [ ] **Encoders & Decoders** (Priority encoders, 2-to-4 and 3-to-8 line decoders)
- [ ] **Arithmetic Circuits** (Half Adder, Full Adder, Half Subtractor, Full Subtractor, 4-bit Parallel Adder/Subtractor)

---

## 🎯 High-Yield Exam Day Strategy
1. **Focus on LA&DE first**: Exam is on **5 Oct**! Complete RREF, Eigenvalues/Eigenvectors, Diagonalization, and Rank-Nullity theorem.
2. Use the built-in **25-min Pomodoro timer** in the web app to maintain intense, focused study sprints!

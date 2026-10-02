# 🗓️ Mid-Semester Exam Preparation & Schedule Checklist

> **Exam Schedule (Oct 2026)**:
> 1. 📐 **LA&DE** — **5 Oct** (Sunday/Monday - First Exam!)
> 2. 🔢 **Discrete Mathematics** — **6 Oct**
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
- [ ] **Homogeneous Systems** ($Ax = 0$, trivial vs non-trivial solutions, free variables, nullity)
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

### 1. Data Understanding & Exploratory Analysis (EDA)
- [ ] **Data Analytics Life Cycle & Types** (Descriptive, Diagnostic, Predictive, Prescriptive analytics)
- [ ] **Data Cleaning & Preprocessing** (Missing values imputation, outlier detection via IQR & Z-score)
- [ ] **EDA & Visualization** (Summary statistics, histograms, box plots, scatter plots, correlation heatmaps)

### 2. Statistical Foundations & Probability
- [ ] **Measures of Central Tendency & Dispersion** (Mean, median, mode, variance, standard deviation, skewness)
- [ ] **Probability Distributions** (Binomial, Poisson, Normal / Gaussian distribution, Standard Normal Z-table, Central Limit Theorem)
- [ ] **Hypothesis Testing** (Null $H_0$ vs Alternative $H_1$, Type I & II errors, p-value, Z-test, t-test, Chi-square)

### 3. Predictive Modeling & Regression
- [ ] **Linear Regression** (Ordinary Least Squares, slope/intercept, $R^2$ and Adjusted $R^2$)
- [ ] **Logistic Regression & Classification** (Sigmoid function, confusion matrix, precision, recall, F1-score, ROC-AUC)
- [ ] **Clustering & Dimensionality Reduction** (K-Means algorithm, Elbow method, PCA concept)

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

const semester3Subjects = [
    {
        code: "BMC301",
        name: "Python Programming",
        type: "Core",
        credits: 3,
        ltp: "3-0-0",

        syllabus: [
            {
                unit: "Unit I",
                title: "Introduction to Python",
                content: `Introduction and Basics; Setting up path Python.
            Data Variables & Operators: Data Variables and its types, id() and type() functions, Coding Standards.
            Input-Output: Printing on screen, Reading data from keyboard.
            Control Structures: if-else, elif, Nested if, Iteration Control structures, Break, Continue & Pass.`,
                lectures: 8
            },
            {
                unit: "Unit II",
                title: "String Manipulation",
                content: `Accessing Strings, Basic Operations, String slices, Function and Methods.
            Lists: Introduction, Accessing list, Operations, Working with lists, Function and Methods.
            Tuple: Introduction, accessing tuples, Operations, Working, Functions and Methods.`,
                lectures: 8
            },
            {
                unit: "Unit III",
                title: "Dictionaries & Functions",
                content: `Dictionaries: Introduction, accessing values in dictionaries, Working with dictionaries, Properties, Functions.
            Functions: Defining & Calling a function, Passing arguments to functions – Mutable & Immutable Data Types, Different types of arguments, Recursion, Scope of variables.`,
                lectures: 8
            },
            {
                unit: "Unit IV",
                title: "Modules & File Handling",
                content: `Modules and Packages: User-defined modules and Standard Library: random, numpy, scipy, sys, Math Module, String Module, List Module, Date & Time Module.
            Regular Expressions: match, search, replace.
            File Handling: Introduction, File Types, Creating, Opening, Closing, Renaming, Accessing and deleting files, File pointers, File Modes, Binary files.`,
                lectures: 8
            },
            {
                unit: "Unit V",
                title: "Exception Handling",
                content: `Exception, Exception Handling, Except clause, Try-finally clause, User Defined Exceptions.
            Basics of Python for Data Analysis, Introduction to series and dataframes.`,
                lectures: 8
            }
        ]
    },

    {
        code: "BMC302",
        name: "Software Engineering",
        type: "Core",
        credits: 4,
        ltp: "4-0-0",

        syllabus: [
            {
                unit: "Unit I",
                title: "Introduction & SDLC",
                content: `Introduction to Software Engineering, Software Components, Software Characteristics, Software Crisis, Software Engineering Processes, Similarity and Differences from Conventional Engineering Processes, Software Quality Attributes.
            SDLC Models: Water Fall Model, Prototype Model, Spiral Model, Evolutionary Development Models, Iterative Enhancement Models.`,
                lectures: 8
            },
            {
                unit: "Unit II",
                title: "SRS & SQA",
                content: `Requirement Engineering Process: Elicitation, Analysis, Documentation, Review and Management of User Needs, Feasibility Study, Information Modelling, Data Flow Diagrams, Entity Relationship Diagrams, Decision Tables, SRS Document, IEEE Standards for SRS.
            Software Quality Assurance: Verification and Validation, SQA Plans, Software Quality Frameworks, ISO 9000 Models, SEI-CMM Model.`,
                lectures: 8
            },
            {
                unit: "Unit III",
                title: "Software Design",
                content: `Basic Concept of Software Design, Architectural Design, Low Level Design: Modularization, Design Structure Charts, Pseudo Codes, Flow Charts, Coupling and Cohesion Measures, Design Strategies: Function Oriented Design, Object Oriented Design, Top-Down and Bottom-Up Design.
            Software Measurement and Metrics: Halstead’s Software Science, Function Point Based Measures, Cyclomatic Complexity Measures: Control Flow Graphs.`,
                lectures: 8
            },
            {
                unit: "Unit IV",
                title: "Software Testing",
                content: `Testing Objectives, Unit Testing, Integration Testing, Acceptance Testing, Regression Testing, Testing for Functionality and Testing for Performance, Top Down and Bottom-Up Testing Strategies, Test Drivers and Test Stubs, White Box Testing, Black Box Testing, Test Data Suite Preparation, Alpha and Beta Testing.
            Static Testing: Peer Reviews, Walk Through, Code Inspection, Compliance with Design and Coding Standards.`,
                lectures: 8
            },
            {
                unit: "Unit V",
                title: "Maintenance & Project Management",
                content: `Software Maintenance, Preventive, Corrective and Perfective Maintenance, Cost of Maintenance, Software Re-Engineering, Reverse Engineering.
            Software Configuration Management, Change Control, Version Control, CASE Tools.
            COCOMO, Resource Allocation Models, Software Risk Analysis and Management.`,
                lectures: 8
            }
        ]
    },

    {
        code: "BMC303",
        name: "Computer Networks",
        type: "Core",
        credits: 4,
        ltp: "3-1-0",

        syllabus: [
            {
                unit: "Unit I",
                title: "Data Communications",
                content: `Data communication Components and characteristics, Data representation and Data flow.
            Networks: LAN, WAN, MAN, Topologies.
            ISO-OSI Model and TCP-IP Model.
            HUB, Bridge, Switch, Router and Gateways.
            Guided and Unguided Transmission Media.
            Wired LANs and Wireless LANs.`,
                lectures: 8
            },
            {
                unit: "Unit II",
                title: "Data Link Layer",
                content: `Error Detection and Error Correction: LRC, VRC, Checksum, CRC, Hamming Code.
            Flow Control: Stop and Wait, Sliding Window, Go-back-N ARQ, Selective Repeat ARQ.
            Channel Allocation: ALOHA, CSMA, CSMA/CD, CDMA/CA, TDMA, FDMA, Token Passing.`,
                lectures: 8
            },
            {
                unit: "Unit III",
                title: "Network Layer",
                content: `Switching Techniques: Circuit, Packet and Message Switching.
            IPv4, IPv6, Classes, Subnetting.
            ARP, RARP, BOOTP, DHCP.
            Interdomain and Intradomain Routing.`,
                lectures: 8
            },
            {
                unit: "Unit IV",
                title: "Transport Layer",
                content: `Reliable and Unreliable Connection, Port and Socket Addressing.
            UDP, TCP, SCTP.
            Congestion Control.
            Quality of Service (QoS).`,
                lectures: 8
            },
            {
                unit: "Unit V",
                title: "Application Layer",
                content: `DNS, WWW, HTTP, Electronic Mail, FTP, Remote Login.
            Cryptography: Goal, Applications, Attacks, Encryption, Decryption, Public-key and Private-key Cryptography.`,
                lectures: 8
            }
        ]
    },

    {
        code: "BMC013",
        name: "Software Project Management",
        type: "Elective-I",
        credits: 3,
        ltp: "3-0-0",

        syllabus: [
            {
                unit: "Unit I",
                title: "Project Planning",
                content: `Importance of Software Project Management, Activities, Methodologies, Categorization of Software Projects, Management Principles, Cost-benefit Evaluation, Risk Evaluation, Strategic Program Management, Stepwise Project Planning.`,
                lectures: 8
            },
            {
                unit: "Unit II",
                title: "Project Life Cycle & Estimation",
                content: `Software Process Models, RAD, Agile, DSDM, Extreme Programming, Effort and Cost Estimation, COSMIC Function Points, COCOMO II.`,
                lectures: 8
            },
            {
                unit: "Unit III",
                title: "Activity Planning & Risk",
                content: `Project Scheduling, Network Planning Models, Forward Pass, Backward Pass, Critical Path Method, Risk Identification, PERT, Monte Carlo Simulation, Resource Allocation.`,
                lectures: 8
            },
            {
                unit: "Unit IV",
                title: "Project Control",
                content: `Management Framework, Cost Monitoring, Earned Value Analysis, Project Tracking, Change Control, Software Configuration Management, Contract Management.`,
                lectures: 8
            },
            {
                unit: "Unit V",
                title: "Staffing",
                content: `Managing People, Organizational Behaviour, Staff Selection, Motivation, Oldham-Hackman Model, Stress, Ethics, Teamwork, Leadership, Communication Plans.`,
                lectures: 8
            }
        ]
    },

    {
        code: "BMC021",
        name: "Artificial Intelligence",
        type: "Elective-II",
        credits: 3,
        ltp: "3-0-0",

        syllabus: [
            {
                unit: "Unit I",
                title: "Artificial Intelligence",
                content: `Introduction to Artificial Intelligence, Historical Development, Foundation Areas, Intelligent Agents, Computer Vision, Natural Language Processing.`,
                lectures: 8
            },
            {
                unit: "Unit II",
                title: "Searching Techniques",
                content: `Problem Solving by Searching, Uninformed Search, Informed Search, Local Search Algorithms, Adversarial Search, Alpha-Beta Pruning.`,
                lectures: 8
            },
            {
                unit: "Unit III",
                title: "Knowledge Representation",
                content: `Propositional Logic, Predicate Logic, First Order Logic, Resolution, Forward Chaining, Backward Chaining, Utility Theory, Hidden Markov Model, Bayesian Networks.`,
                lectures: 8
            },
            {
                unit: "Unit IV",
                title: "Machine Learning",
                content: `Introduction, Types, Applications, Decision Trees, Statistical Learning, Naïve Bayes, EM Algorithm, Reinforcement Learning.`,
                lectures: 8
            },
            {
                unit: "Unit V",
                title: "Pattern Recognition",
                content: `Design Principles, Statistical Pattern Recognition, PCA, LDA, Nearest Neighbor Rule, Bayes Classifier, K-Means Clustering, Support Vector Machine.`,
                lectures: 8
            }
        ]
    },

    {
        code: "BMC351",
        name: "Python Programming Lab",
        type: "Practical",
        credits: 2,
        ltp: "0-0-3"
    },

    {
        code: "BMC352",
        name: "Software Engineering Lab",
        type: "Practical",
        credits: 2,
        ltp: "0-0-3"
    },

    {
        code: "BMC353",
        name: "Mini Project",
        type: "Practical",
        credits: 2,
        ltp: "0-0-4"
    }
];
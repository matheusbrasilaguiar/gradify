# Gradify_MVP_Technical_Specification.md

## 1. Introduction

Gradify is a global Web3 platform designed to issue tamper-proof academic credentials and automate transparent scholarships through blockchain and smart contracts.  
It connects institutions, students, and donors to democratize education and create a trusted ecosystem for academic achievements.

---

## 2. Entities and Relationships

| Entity                   | Key Attributes                                                                                       | Relationships                                                                                                   |
|--------------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Institution              | id, name, address, website, type, created_at, updated_at                                            | Issues Certificates, Manages Scholarships                                                                       |
| Student                  | id, name, email, phone, course, created_at, updated_at                                              | Receives Certificates, Applies to Scholarships                                                                  |
| Donor                    | id, name, email, type, created_at, updated_at                                                       | Makes Donations                                                                                                 |
| Certificate              | id, title, description, issue_date, blockchain_tx_hash, status, created_at, updated_at               | Issued by Institution, Belongs to Student, Has Blockchain Transactions                                          |
| Scholarship              | id, title, description, amount, eligibility_criteria, status, created_at, updated_at                 | Created by Institution, Receives Applications, Funded by Donations, Releases funds via Blockchain Transactions  |
| ScholarshipApplication   | id, status, application_date                                                                         | Connects Student and Scholarship                                                                                |
| Donation                 | id, amount, donation_date, blockchain_tx_hash, status                                                | Made by Donor, Associated with Scholarship, Triggers Blockchain Transactions                                     |
| BlockchainTransaction    | id, tx_hash, type, created_at, status                                                                | Linked to Certificates, Donations, and Scholarship fund releases                                                |

The **Scholarship** entity is directly connected to BlockchainTransaction to reflect its smart contract-based, on-chain funding release mechanism.

---

## 3. Functional and Non-Functional Requirements

### Functional Requirements

| ID      | Description                                                                                                                                                | Priority |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| FR-01   | Users (students, institutions, donors) can register and authenticate securely using email/password.                                                        | High     |
| FR-02   | Users can also authenticate using social logins (Google, LinkedIn, etc.) for convenience.                                                                   | Medium   |
| FR-03   | Wallet-based login for blockchain-related operations (signing transactions, receiving funds, verifying ownership).                                           | High     |
| FR-04   | Institutions can issue blockchain-registered academic certificates, stored immutably on the Stellar blockchain.                                              | High     |
| FR-05   | Certificates include verifiable metadata and blockchain transaction hash for authenticity.                                                                   | High     |
| FR-06   | Institutions can create and manage scholarship programs, including eligibility criteria, amounts, and milestones for release of funds.                       | High     |
| FR-07   | Scholarships are represented by smart contracts on the Stellar/Soroban blockchain to automate funding disbursement.                                          | High     |
| FR-08   | Students can view available scholarships, filter them based on eligibility, and apply directly through the platform.                                         | High     |
| FR-09   | Donors can fund scholarships, view program details, and track the impact of their donations in real-time.                                                    | High     |
| FR-10   | Donors’ contributions trigger blockchain transactions for transparency and immutability.                                                                      | High     |
| FR-11   | Public page and QR code-based verification of academic certificates, accessible by third-party verifiers (e.g., employers).                                   | High     |
| FR-12   | Personalized dashboards for each user type (student, institution, donor) to view their activity, on-chain interactions, and impact summaries.                 | Medium   |
| FR-13   | System must clearly separate and integrate on-chain components (smart contracts, transactions) and off-chain components (user data, metadata).                | High     |

---

### Non-Functional Requirements

| ID       | Description                                                                                                                                     | Priority |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| NFR-01   | Low-latency data retrieval for critical actions such as certificate verification and dashboard loading.                                          | High     |
| NFR-02   | Full compliance with GDPR and LGPD regulations for handling personal data and scholarship application information.                               | High     |
| NFR-03   | Use of cryptographic hashing and selective disclosure to protect sensitive user data, ensuring privacy in blockchain-registered data.            | High     |
| NFR-04   | Modular architecture to support horizontal scalability and accommodate high volumes of user registrations, applications, and donations.          | High     |
| NFR-05   | High availability and data integrity through blockchain-backed records (for certificates, scholarships, and donations).                          | High     |
| NFR-06   | Secure management of blockchain private keys and wallet integrations (for students receiving funds, institutions issuing certificates).          | High     |
| NFR-07   | UX/UI must be intuitive and accessible, with future plans for multi-language support and compliance with accessibility standards (WCAG).         | Medium   |
| NFR-08   | Separation of concerns between on-chain data (smart contracts, fund disbursement, credentials) and off-chain data (user profiles, dashboards).  | High     |

---

# 4. MVP Architecture

## 4.1 Architectural Style

The Gradify MVP follows a **microservices-inspired modular architecture**, leveraging the **Layered (n-tier)** style for internal services.  
This ensures:

- Clear separation of concerns (presentation, business logic, data access).  
- Scalable, maintainable codebases for each module (auth, certificates, scholarships, etc.).  
- Independent deployment and development of services if needed in the future.

For critical integrations with the blockchain (on-chain) and database (off-chain), Gradify uses **API-driven communication**.

---

## 4.2 Architectural Pattern

The chosen architectural pattern is **Hexagonal Architecture (Ports and Adapters)**.  
This pattern ensures that:

- Core business logic (domain layer) is **isolated** from infrastructure and external dependencies (blockchain, DB, etc.).  
- Ports (interfaces) define how the system communicates internally and externally.  
- Adapters implement these ports for specific technologies (Stellar, PostgreSQL, etc.).

---

## 4.3 Design Patterns

To promote scalability, testability, and maintainability, Gradify will employ key design patterns:

- **Repository Pattern**: Abstracts data persistence logic, decoupling the domain from the database.  
- **Factory Pattern**: For creating domain objects like Certificates and Scholarships consistently.  
- **Observer/Publisher-Subscriber Pattern**: For event-driven flows (e.g., real-time notifications, blockchain confirmations).  
- **Adapter Pattern**: To integrate blockchain (Soroban) and file storage (IPFS or Cloud) without coupling.  
- **Strategy Pattern**: For authentication flows (social login, wallet-based login, email/password).

---

## 4.4 High-Level Overview

| Component           | Technology                                      | Role                                                                                     |
|----------------------|------------------------------------------------|------------------------------------------------------------------------------------------|
| **Frontend**        | React + Tailwind CSS                            | Modular, responsive user interface for all roles.                                        |
| **Backend**         | Node.js (Nest.js) or Java (Spring Boot)         | API layer, business logic, and integration with blockchain and databases.                 |
| **Blockchain**      | Stellar blockchain with Soroban smart contracts | Immutable record-keeping for certificates, automated scholarship disbursements.          |
| **Database**        | PostgreSQL                                      | Stores off-chain data: user profiles, applications, logs, analytics.                     |
| **File Storage**    | IPFS or Cloud bucket (AWS S3, etc.)             | Stores certificate files, with hashes stored on-chain for verification.                   |
| **API Gateway**     | Kong, NGINX (optional)                          | Manages routing, load balancing, and security of API calls.                               |
| **Monitoring & Logs**| Prometheus, Grafana, Sentry                     | Observability, performance metrics, and error tracking.                                   |

---

## 4.5 Low-Level Modules

| Module                  | Responsibilities                                                                                                    |
|--------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Auth Module**         | Registration, login (email/password, social), wallet-based auth, role-based profiles.                               |
| **Certificate Module**  | Issuance of certificates (as NFTs or hashed assets), verification endpoints, QR generation.                          |
| **Scholarship Module**  | Create/manage scholarships, validate criteria, track applications, integrate with smart contracts.                    |
| **Donations Module**    | Accept and manage donations, link to scholarships, provide dashboards for donors.                                    |
| **Blockchain Module**   | Handle Stellar/Soroban smart contract calls, blockchain transaction tracking, and wallet-based interactions.         |
| **Notification Module** | Automatic emails, real-time notifications, webhooks for key events (e.g., scholarship accepted).                      |

---

# 5. Component-Level Architecture

This section provides detailed component-level descriptions for the key modules of the Gradify MVP.  
These components illustrate how we will organize business logic, persistence, blockchain interactions, and external integrations.

---

## 5.1 Certificate Module

The Certificate Module manages the issuance, storage, and verification of academic certificates. It is designed to integrate off-chain data (PostgreSQL, file storage) with on-chain data (Stellar blockchain and smart contracts).

**Components:**

- **CertificateController**: Handles API endpoints for issuing and viewing certificates.
- **CertificateService**: Contains business logic for certificate issuance, metadata handling, and blockchain interactions.
- **CertificateRepository**: Manages persistence of certificate data in PostgreSQL.
- **BlockchainAdapter**: Acts as an adapter to interact with Stellar/Soroban smart contracts, ensuring proper blockchain operations.
- **QRCodeGenerator**: Generates QR codes for certificate verification by third-party verifiers.

**External Integrations:**

- **PostgreSQL**: Stores certificate metadata (titles, descriptions, status, etc.).
- **IPFS / Cloud Storage**: Stores the actual certificate files, with hashes stored on the blockchain.
- **Stellar Blockchain**: Records the certificate’s hash and metadata immutably, ensuring authenticity and verification.

---

## 5.2 Scholarship Module

The Scholarship Module manages scholarships, applications, and the on-chain disbursement of scholarship funds through smart contracts.

**Components:**

- **ScholarshipController**: Provides API endpoints for creating scholarships, managing them, and viewing applications.
- **ScholarshipService**: Business logic for eligibility checks, application handling, and interactions with smart contracts for scholarship disbursement.
- **ScholarshipRepository**: Manages storage and retrieval of scholarship and application data.
- **BlockchainAdapter**: Connects to Stellar/Soroban smart contracts to handle automated fund disbursement and track on-chain transactions.
- **NotificationService**: Sends updates to users about their application status, scholarship awards, and blockchain activity.

**External Integrations:**

- **PostgreSQL**: Stores scholarships, applications, donor data, and associated metadata.
- **Stellar Blockchain**: Automates scholarship fund disbursement via smart contracts, ensuring transparency and immutability.

---

# 6. Smart Contract Interactions (Stellar/Soroban)

This section describes the transaction flows and smart contract interactions for the Gradify MVP.  
We define how critical data (certificates, scholarships, donations) are handled on-chain for immutability, transparency, and automation.

---

## 6.1 High-Level Overview

Gradify uses **Stellar blockchain** and **Soroban smart contracts** for the following purposes:

- **Immutable Academic Credentials**: Certificates are registered on-chain as NFTs or immutable transactions.
- **Automated Scholarship Disbursement**: Smart contracts manage the secure and transparent release of scholarship funds.
- **Donation Tracking and Impact**: Donors’ contributions are handled through blockchain transactions for auditability.

---

## 6.2 Certificate Issuance Flow (On-Chain)

**1. Certificate Creation**  
- The institution creates the certificate in the backend (off-chain): includes details like title, description, student, and associated file (IPFS or cloud bucket).  
- The file’s hash is generated and linked to the certificate metadata.

**2. Blockchain Registration**  
- The backend (CertificateService) invokes the **BlockchainAdapter** to interact with Soroban smart contracts.  
- A smart contract function is called to register the certificate’s hash and metadata as an NFT or immutable record on the Stellar blockchain.  
- The blockchain transaction hash is stored in PostgreSQL for verification.

**3. Verification**  
- Verifiers or third parties use the public verification page (QR code) to retrieve the transaction hash and validate certificate authenticity on-chain.

---

## 6.3 Scholarship Disbursement Flow (On-Chain)

**1. Scholarship Creation**  
- Institutions create scholarships (off-chain data stored in PostgreSQL).  
- A corresponding smart contract is deployed (or updated) on Soroban to manage disbursement rules.

**2. Student Application**  
- Students apply for scholarships via the frontend (off-chain).  
- Applications are reviewed and approved by the institution.

**3. Fund Disbursement**  
- Once approved, the backend (ScholarshipService) triggers a smart contract call through the BlockchainAdapter.  
- The smart contract verifies eligibility criteria and releases funds directly to the student’s wallet (on Stellar blockchain).

**4. Donor Interaction**  
- Donors contribute to scholarships via on-chain transactions.  
- Smart contracts track donor contributions and update balances in real-time.

**5. Blockchain Transparency**  
- All scholarship-related transactions (creation, donor funding, disbursement) are recorded immutably on the Stellar blockchain for transparency and auditability.

---

## 6.4 Key Smart Contract Functions

| Function                               | Description                                                                            |
|----------------------------------------|----------------------------------------------------------------------------------------|
| **registerCertificate(hash, metadata)**| Registers the hash and metadata of the academic certificate as an NFT or record.        |
| **createScholarship(details)**         | Creates a scholarship contract with eligibility rules, amount, and disbursement logic.  |
| **applyForScholarship(studentId)**     | Student applies for a scholarship; off-chain review follows.                            |
| **fundScholarship(donorId, amount)**   | Donor funds a scholarship, tracked immutably on-chain.                                  |
| **disburseScholarship(studentId)**     | Releases funds to the student’s wallet upon approval.                                   |

---

# 7. Technology Stack

Gradify will use a modern, modular, and scalable technology stack to ensure performance, maintainability, and seamless blockchain integration.

---

| Layer                   | Stack / Tool                                      | Notes / Reasoning                                      |
|--------------------------|----------------------------------------------------|--------------------------------------------------------|
| **Frontend**            | React.js + TailwindCSS                             | Modular, performant UI/UX with a modern developer experience.            |
| **Backend**             | Node.js (Nest.js)                                  | Modular and scalable API layer, well-suited for microservices and easy integration with Stellar/Soroban SDKs. |
| **Blockchain**          | Stellar SDK + Soroban SDK                          | Secure, on-chain logic for certificates and scholarship disbursement.    |
| **Database**            | PostgreSQL                                         | Reliable relational database for off-chain data.      |
| **File Storage**        | IPFS or AWS S3                                     | Decentralized or cloud-based file storage, with blockchain-referenced hashes. |
| **Testing**             | Jest (frontend), Jest + Supertest (backend)        | Unit and integration testing for robustness.          |
| **Deployment**          | Docker (containers), GitHub Actions (CI/CD)        | Modern, container-based deployment workflow.          |
| **Monitoring**          | Sentry, Grafana, Prometheus                        | Observability, performance tracking, and error monitoring. |

---











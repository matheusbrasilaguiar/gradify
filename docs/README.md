# Gradify MVP Technical Specification

## 1. Introduction

Gradify is a global Web3 platform designed to issue tamper-proof academic credentials and automate transparent scholarships through blockchain and smart contracts. It connects institutions, students, and donors to democratize education and create a trusted ecosystem for academic achievements.

---

**High-Level Context Diagram**
![High-Level Context Diagram](./Diagrams/images/High-Level%20Context%20Diagram.png)

## 2. Entities and Relationships

| Entity                 | Key Attributes                                                                                                       | Relationships                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Institution            | `id`, `name`, `address`, `website`, `type`, `verified` (boolean), `created_at`, `updated_at`                         | Issues Certificates, Manages Scholarships                                                                      |
| Student                | `id`, `name`, `email`, `phone`, `program_id`, `created_at`, `updated_at`                                             | Receives Certificates, Applies to Scholarships                                                                 |
| Donor                  | `id`, `name`, `email`, `type`, `created_at`, `updated_at`                                                            | Makes Donations                                                                                                |
| Program                | `id`, `name`, `description`, `institution_id`, `created_at`, `updated_at`                                            | Linked to Certificates, Offered by Institution                                                                 |
| Certificate            | `id`, `title`, `description`, `issue_date`, `blockchain_tx_hash`, `status`, `program_id`, `created_at`, `updated_at` | Issued by Institution, Belongs to Student, Has Blockchain Transactions                                         |
| Scholarship            | `id`, `title`, `description`, `amount`, `eligibility_criteria`, `status`, `created_at`, `updated_at`                 | Created by Institution, Receives Applications, Funded by Donations, Releases funds via Blockchain Transactions |
| ScholarshipApplication | `id`, `status`, `application_date`                                                                                   | Connects Student and Scholarship                                                                               |
| Donation               | `id`, `amount`, `donation_date`, `blockchain_tx_hash`, `status`                                                      | Made by Donor, Associated with Scholarship, Triggers Blockchain Transactions                                   |
| BlockchainTransaction  | `id`, `tx_hash`, `type`, `created_at`, `status`                                                                      | Linked to Certificates, Donations, and Scholarship fund releases                                               |

> Institutions must pass an off-chain verification process managed manually by the Gradify team before gaining permissions to issue certificates and manage scholarships.

**Entity Relationship Diagram**
![Entity Relationship Diagram](./Diagrams/images/ERD%20Diagram.png)

---

## 3. Functional and Non-Functional Requirements

## Functional Requirements

| ID      | Description                                                                                                                 | Priority |
|---------|-----------------------------------------------------------------------------------------------------------------------------|----------|
| **FR-01** | User registration and secure authentication (student, institution, donor) using email/password and social login.              | High     |
| **FR-02** | Wallet-based login for blockchain-related operations (signing transactions, receiving funds, verifying ownership).             | High     |
| **FR-03** | Institutions can issue blockchain-registered academic certificates (NFTs or hashed records on Stellar/Soroban blockchain).     | High     |
| **FR-04** | Certificates must include verifiable metadata and blockchain transaction hash for authenticity.                                | High     |
| **FR-05** | Institutions can create and manage scholarship programs, including eligibility criteria and milestones.                       | High     |
| **FR-06** | Scholarships represented by smart contracts on Stellar/Soroban to automate fund disbursement.                                  | High     |
| **FR-07** | Students can browse and apply for scholarships directly through the platform, with filters and status tracking.                | High     |
| **FR-08** | Donors can fund scholarships, view program details, and track the real-time impact of their donations.                         | High     |
| **FR-09** | All donations are recorded on-chain for transparency and immutability.                                                          | High     |
| **FR-10** | Public verification page for academic certificates via QR code or blockchain ID.                                                | High     |
| **FR-11** | Personalized dashboards for each user type (student, institution, donor) to view their activities and metrics.                  | Medium   |
| **FR-12** | Profile and role-based access management (e.g., only verified institutions can issue certificates).                             | High     |
| **FR-13** | Clear integration and separation of on-chain components (smart contracts, transactions) and off-chain data (user profiles).     | High     |
| **FR-14** | Real-time notifications for key events (e.g., application status, blockchain confirmations).                                    | Medium   |
| **FR-15** | History tracking for donations and scholarship applications for each user.                                                       | Medium   |

---

## Non-Functional Requirements

| ID      | Description                                                                                                                                 | Priority |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------|----------|
| **NFR-01** | Low-latency data retrieval for critical actions such as certificate verification and dashboard loading.                                   | High     |
| **NFR-02** | Full compliance with GDPR and LGPD regulations for handling personal and scholarship application data.                                    | High     |
| **NFR-03** | Use of cryptographic hashing and selective disclosure to protect sensitive user data (stored off-chain securely via IPFS or cloud).       | High     |
| **NFR-04** | Modular architecture to support horizontal scalability and high user/application/donation volumes.                                        | High     |
| **NFR-05** | High availability and data integrity, leveraging blockchain-backed records for critical components (certificates, scholarships, donations).| High     |
| **NFR-06** | Secure management of private keys and blockchain wallets (with a clear custodial model for MVP, evolving to self-custody later).          | High     |
| **NFR-07** | Intuitive, accessible UX/UI with responsive design for both web and mobile devices.                                                       | Medium   |
| **NFR-08** | Clear separation of concerns between on-chain (smart contracts, transactions) and off-chain (dashboards, user profiles) data.            | High     |
| **NFR-09** | Monitoring and logging of key events (including blockchain transactions) to detect anomalies or failures.                                 | High     |
| **NFR-10** | Consistency and clarity in diagrams and flowcharts (e.g., using standardized legends, colors, and naming conventions).                     | Medium   |

---

# 4. MVP Architecture

### 4.1 Architectural Style

Gradify MVP follows a **microservices-inspired modular architecture**, leveraging a **Layered (n-tier)** style for internal services, ensuring scalability and maintainability.

Critical integrations (blockchain and database) utilize **API-driven communication**. Future scalability considerations include transitioning to containerized microservices and Kubernetes deployments.

**Container Diagram**
![Container Diagram](./Diagrams/images/Container%20Diagram.png)

---

### 4.2 Architectural Pattern

The chosen architectural pattern is **Hexagonal Architecture (Ports and Adapters)**, isolating core business logic from infrastructure, ensuring clear ports and adapters to support blockchain and external service integrations.

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

**Certificate Module Component Diagram**
![Certificate Module Component Diagram](./Diagrams/images/Certificate%20Module%20Component%20Diagram.png)

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

**Scholarship Module Component Diagram**
![Scholarship Module Component Diagram](./Diagrams/images/Scholarship%20Module%20Component%20Diagram.png)

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

**Certificate Issuance Flow (On-Chain)**
![Certificate Issuance Flow (On-Chain)](./Diagrams/images/Certificate%20Issuance%20Flow%20(On-Chain).png)

---
**Certificate Issuance and Verification Sequence**
![Certificate Issuance and Verification Sequence)](./Diagrams/images/Certificate%20Issuance%20and%20Verification%20Sequence.png)

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

**Scholarship Disbursement Flow (On-Chain)**
![Scholarship Disbursement Flow (On-Chain)](./Diagrams/images/Scholarship%20Disbursement%20Flow%20(On-Chain).png)

---
**Scholarship Donation and Disbursement Sequence**
![Scholarship Donation and Disbursement Sequence](./Diagrams/images/Scholarship%20Donation%20and%20Disbursement%20Sequence.png)

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

### 6.5 Key Security Considerations

The MVP employs a custodial model for private key management. Initially, Gradify securely manages blockchain keys and wallets on behalf of institutions and users, with plans to evolve into a self-custody or hybrid model based on future security and user adoption evaluations.

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

### 7.1 Future Scalability Roadmap

Initially, Gradify MVP will run on a centralized infrastructure with API-driven services. Future scalability includes:

* Transitioning to microservices architecture with Docker containers and Kubernetes.
* Implementing advanced monitoring and alerting mechanisms using tools like Prometheus, Grafana, and Sentry.
* Enhancing decentralized file storage capabilities (e.g., increased IPFS usage).
* Gradual decentralization of key management (moving towards non-custodial wallets).

---

## 7.2 Deployment View

**Deployment Diagram (MVP Cloud-Native)**
![Deployment Diagram (MVP Cloud-Native)](./Diagrams/images/Deployment%20Diagram%20(MVP%20Cloud-Native).png)











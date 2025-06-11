# Gradify

![Status](https://img.shields.io/badge/Status-in%20progress-lightgrey)
![MVP](https://img.shields.io/badge/MVP-in%20development-blueviolet)
[![Web3 Ready](https://img.shields.io/badge/Web3-Stellar%20%2B%20Soroban-blueviolet.svg)]()
![Documentation](https://img.shields.io/badge/Docs-available-blue)
![Roadmap](https://img.shields.io/badge/Roadmap-on%20track-orange)

---

**Check out at:**  
🌐 **[gradify.tech](https://gradify.tech)**  
Gradify is currently in development. Explore our vision and progress on the official website.


## Vision

**Gradify** is revolutionizing how academic certificates are issued and scholarships are funded — using blockchain to ensure authenticity, automate scholarship allocation, and build global trust in education.

We connect educational institutions, students, and donors in a secure, decentralized ecosystem that democratizes access to education worldwide.

---

## Why Gradify?

- **Diploma and certificate** forgery and fraud create significant barriers for graduates, employers, and institutions, undermining fair opportunities and trust within the educational ecosystem.  
- **Scholarship funds** are often lost to bureaucracy, opacity, and inefficiency, limiting access for deserving students.  
- **Academic certificates** are often difficult to verify across countries, restricting global mobility for graduates.

**Gradify** addresses these challenges by leveraging **Web3/blockchain** to build a secure, transparent, and immutable infrastructure for academic verification and scholarship management.


---

## What We Offer

- **Decentralized academic certificate issuance & verification**  
  Institutions can issue blockchain-registered certificates (NFTs/records) verifiable by third parties worldwide.

- **Smart contract-powered, transparent scholarships**  
  Institutions manage and fund scholarships, with the option for donors to contribute to specific initiatives. Smart contracts securely allocate funds directly to eligible students, with all transactions transparently recorded on-chain.

- **Role-based dashboards**  
  Dedicated experiences for Students, Institutions, and Donors.

- **GDPR/LGPD compliance**  
  Privacy and security for all users.

- **Modular, scalable architecture**  
  Designed for growth, portability, and interoperability.

---

## How It Works

1. **Institutions** issue verifiable academic certificates and establish scholarship programs.  
2. **Students** enroll, browse available scholarships, and apply seamlessly.  
3. **Donors** can optionally contribute to scholarships via secure blockchain transactions.  
4. **Smart contracts** manage the secure and transparent allocation of funds directly to eligible students.

---

## Architecture Overview

Gradify uses a **modular, microservices-inspired architecture** with a clear separation of on-chain (blockchain/smart contracts) and off-chain (backend, database, file storage) components.

- **Frontend:** React.js + Tailwind CSS  
- **Backend:** Node.js (NestJS)
- **Blockchain:** Stellar SDK + Soroban smart contracts  
- **Database:** PostgreSQL  
- **File Storage:** IPFS / AWS S3  
- **Monitoring:** Prometheus, Grafana, Sentry

> Full technical documentation and diagrams are available in [/docs](./docs).  
> Key diagrams: [Context](./docs/Diagrams/images/High-Level%20Context%20Diagram.png) · [ERD](./docs/Diagrams/images/ERD%20Diagram.png) · [Containers](./docs/Diagrams/images/Container%20Diagram.png) · [Components](./docs/Diagrams/images/Certificate%20Module%20Component%20Diagram.png) · [Sequences](./docs/Diagrams/images/Scholarship%20Disbursement%20Flow%20(On-Chain).png) · [Deployment](./docs/Diagrams/images/Deployment%20Diagram%20(MVP%20Cloud-Native).png)

---

## Documentation

All diagrams, requirements, and architecture details can be found in the [/docs](./docs) folder:

- **Entities & Relationships**
- **Functional and Non-Functional Requirements**
- **Component, Container, and Sequence Diagrams**
- **Deployment and Technology Stack**

---

## Collaboration

We welcome feedback, ideas, and future contributors!  
If you want to join the Gradify community or discuss partnership, please reach out:

- **Project Lead:** [Matheus Aguiar](https://www.linkedin.com/in/matheusbrasilaguiar/)

---

<p align="center">
  <i>Empowering trusted education, everywhere.</i>
</p>

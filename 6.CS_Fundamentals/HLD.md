# Microservices Design Patterns :
---

### **1. Decomposition Patterns**
These focus on splitting a monolithic application into smaller, manageable services:
- **By Business Capability**: Define services based on business functionalities (e.g., Order Service, Payment Service).
- **By Subdomain**: Use domain-driven design (DDD) to create services for specific subdomains (e.g., Core, Supporting, Generic).

The **Strangler Pattern** is a method used to migrate from a monolithic application to microservices in a gradual, safe way. It is named after the way a vine slowly overtakes a tree.  

#### Steps to Implement:
1. **Transform**: Identify a part of the monolithic application to replace and build a microservice for it.  
2. **Co-exist**: Allow the monolithic application and microservices to work together during migration.  
3. **Eliminate**: Gradually phase out the monolithic parts as microservices take over.  

#### Key Features:
- **Gradual Migration**: Move step-by-step to avoid disrupting the system.  
- **Coexistence**: The monolith and microservices run together during the transition, ensuring smooth functionality.  
- **Strangling Behavior**: Over time, microservices replace all monolithic components, eventually retiring the legacy system.  

This approach ensures a seamless migration without risking system stability.

---

### **2. Database Patterns**
Handle the challenge of managing data in a distributed system:
- **Database per Service**: Each service owns its schema, ensuring loose coupling.
- **Shared Database**: Less common but used when sharing data across services is necessary.
- **Saga Pattern**: For distributed transactions across multiple services.
- **CQRS**: Separate write models (commands) from read models (queries).
- **Event Sourcing**: Record changes as events for traceability.

---

### **3. Communication Patterns**
Manage how services communicate with each other:
- **Synchronous Communication**: Direct API calls (REST/gRPC).
- **Asynchronous Communication**: Message queues or publish-subscribe systems (e.g., RabbitMQ, Kafka).
- **API Gateway**: Acts as a mediator between clients and services.

---

### **4. Integration Patterns**
Focus on how services work together as a cohesive system:
- **Orchestration**: A central service coordinates tasks between microservices.
- **Choreography**: Services communicate via events without a central orchestrator.

---

### **5. Deployment Patterns**
Optimize how services are deployed and updated:
- **Single Service Deployment**: Deploy each service independently.
- **Blue-Green Deployment**: Switch between two environments to minimize downtime.
- **Canary Deployment**: Gradually release changes to a subset of users.

---

### **6. Cross-Cutting Concerns**
Focus on overarching aspects like monitoring, security, and observability:
- **Monitoring and Logging**: Centralized logging, distributed tracing.
- **Security**: Token-based authentication, service-to-service authentication.
- **Resilience**: Patterns like Circuit Breaker, Bulkhead, Retry.

---

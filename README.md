# 🚀 ShoppingPage_JavaMavenAndReactNext Full Stack Project

This is a full-stack web application based on **Spring Boot (backend) and Next.js (frontend)**, designed according to the provided Figma layout.

---

## 📂 **Project Structure**
```
figma-test_java/
│── backend/               # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/demo/
│   │   │   │   ├── controller/   # API Controllers
│   │   │   │   ├── model/        # Data Models
│   │   │   │   ├── service/      # Business Logic
│   │   │   │   ├── repository/   # Database Queries (if needed)
│   │   │   ├── resources/
│   │   │   │   ├── static/       # Static assets (e.g., images)
│   │   │   │   │   ├── carousel/  # Image assets for the carousel
│   │   │   │   ├── application.properties  # Spring Boot Config
│   ├── pom.xml          # Maven Dependencies
│── frontend/            # Next.js frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Carousel.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Plans.tsx
│   │   ├── pages/       # Next.js pages
│   │   │   ├── index.tsx
│   │   ├── styles/      # Global styles
│   │   │   ├── globals.css
│   ├── package.json     # Frontend dependencies
│   ├── next.config.js   # Next.js configuration
│── README.md
```

---

## **🚀 How to Deploy**
### **1️⃣ Backend (Spring Boot)**
Make sure you have **Java 17+ and Maven** installed.

```sh
# Move to backend folder
cd backend

# Start the Spring Boot server
mvn spring-boot:run
```
✅ The backend will be running at: `http://localhost:8080`

---

### **2️⃣ Frontend (Next.js)**
Make sure you have **Node.js 18+** installed.

```sh
# Move to frontend folder
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```
✅ The frontend will be running at: `http://localhost:3000`

---

## **🛠 Troubleshooting (Common Issues)**
### **1️⃣ Backend not starting**
**Error:** `Port 8080 is already in use.`
- ✅ Run:
  ```sh
  netstat -ano | findstr :8080  # Find process using port 8080
  taskkill /PID <PID> /F  # Replace <PID> with the actual process ID
  ```

**Error:** `Cannot load driver class: com.mysql.cj.jdbc.Driver`
- ✅ Ensure your **`application.properties` does NOT have database configurations** if you are not using a database.

---

### **2️⃣ Frontend API calls not working**
**Issue:** Images are not loading in the carousel (`GET http://localhost:3000/carousel/01.jpg 404 Not Found`)
- ✅ Ensure the images are placed inside `backend/src/main/resources/static/carousel/`
- ✅ Check if you can access images directly in the browser:
  ```
  http://localhost:8080/carousel/01.jpg
  ```
- ✅ Modify `Carousel.tsx` to ensure the correct image path is used:
  ```tsx
  setImages(data.data.map((item: CarouselImage) => `http://localhost:8080${item.imageUrl}`));
  ```

---

### **3️⃣ Header and Carousel have spacing issues**
**Issue:** There is an unwanted gap between the **header and carousel**.
- ✅ Ensure in `globals.css`:
  ```css
  .header { margin: 0; }
  .carousel { margin: 0; padding: 0; }
  main { margin-top: 0; }
  ```

---

## **📌 Additional Notes**
- The project is designed to be **fully responsive**, supporting **desktop & mobile views**.
- The **carousel auto-switches every 2 seconds**, with **manual controls**.
- **Top navigation is fixed**, ensuring easy access to key sections.

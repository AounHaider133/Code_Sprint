**CSC336 - Web Technologies Semester project Spring 2024**

# Code Sprint

Code Sprint is a language learning game with interactive exercises and tutorials to make a lay person first class citizen in the field of programming paradigm.
## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Drag-and-Drop Interface:** Build web applications using a visual programming approach.
- **Responsive Design:** Utilizes Bootstrap 5 and Tailwind CSS for responsive and reusable components.
- **AI Integration:** Provides design suggestions and optimizes system performance with AI.
- **Cloud Support:** Backup, fast access, and caching of resources using cloud services.
- **Backend Management:** Supports Express.js for backend development and MongoDB as an object-oriented database.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AounHaider133/Code_Sprint.git
   cd Code_Sprint
2. **Install required packages:**
   ```bash
   npm install
3. **Execute the back-end:**
   ```bash
   cd backend
4. **Execute the back-end**
   npm start
5. **Execute the front-end:**
   ```bash
   cd frontend
   npm run dev
6. **Export the data in mongoDB from /dataset**
7. **Create account on EmailJS, follow the tutorial in below link regarding account creation, add template shared below-> save, copy service ID, template ID & user ID(public key)**
   ```bash
   https://dev.to/david_bilsonn/how-to-send-emails-directly-from-your-react-website-a-step-by-step-tutorial-144b#:~:text=Step%201%3A%20Sign%20up%20for%20an%20account%20on,navigation%20menu%2C%20then%20click%20on%20%27Add%20new%20service%27.
8. **EmailJS template**
   ```bash
   <h2>[CodeSprint] New Contact Message</h2>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong> {{message}}</p>

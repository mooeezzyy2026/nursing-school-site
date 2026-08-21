# Lifecare Medical Institute (LMI) - Official Website

This is the official frontend repository for the **Lifecare Medical Institute & School of Nursing** website. It is built using modern web technologies to ensure a fast, responsive, and highly professional user experience.

## Tech Stack
* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 How to Run the Website on a New Computer (Windows / Mac)

If you have moved this project to a new computer, follow these exact steps to get it running.

### Step 1: Install Node.js
Before you begin, ensure you have **Node.js** installed on the new computer. 
* Download and install it from: https://nodejs.org/ (The LTS version is recommended).
* **Windows Users:** Download the Windows Installer (`.msi`). When installing, just click "Next" through the default options. 

### Step 2: Open the Project
1. Copy the entire project folder to your new computer. *(Note: Do not copy the `node_modules` or `.next` folders, as they contain thousands of files and will be regenerated).*
2. **Windows Users:** If you transferred the files in a `.zip` folder, make sure you right-click and select **"Extract All..."** first.
3. Open **VS Code** (Visual Studio Code).
4. Go to `File` -> `Open Folder...` and select your extracted LMI project folder.

### Step 3: Open the Terminal
You need to open the terminal inside VS Code to run the setup commands.
* **Windows Shortcut:** Press `Ctrl` + ` ` ` (the backtick key, usually above the Tab key). 
* **Mac Shortcut:** Press `Cmd` + ` ` `.
* Alternatively, click `Terminal` -> `New Terminal` in the top menu. This will open a Command Prompt, PowerShell, or bash window at the bottom of your screen.

### Step 4: Install Base Dependencies
In the terminal panel at the bottom of your screen, type the following command and press **Enter** to download all the required standard packages:

npm install

### Step 5: Install UI Libraries (Icons & Animations)
To ensure the custom icons and dropdown animations work perfectly, run this command to install the specific UI libraries used on the site:

npm install lucide-react framer-motion

### Step 6: Start the Development Server
Once all installations are complete, run the following command to start the website:

npm run dev

*(Windows Users: If you get a Windows Security Alert firewall popup here, click "Allow access").*

### Step 7: View the Website
Open your web browser (Chrome, Safari, Edge) and go to:
**http://localhost:3000**

---

## 📁 Managing Images (Important)
All images, including the site logo and campus gallery photos, must be placed inside the **`public`** folder located at the root of the project. 

* **Logo:** Ensure your logo is named `logo.png` and is placed directly in the `public` folder.
* **Gallery Photos:** Update the `src/app/gallery/page.tsx` file to match the exact file names of the images you place inside the `public` folder.

---

## 💻 Saving Updates to GitHub
Whenever you make updates to the code and want to save them to your GitHub repository, run these three commands in your terminal:

git add .
git commit -m "Describe your updates here"
git push

---

## 🛠️ Building for Production (Going Live)
When you are ready to host this website on a live server (like Vercel, Netlify, or a custom VPS), you need to create an optimized production build. 

Run the build command:
npm run build

Then, to start the production server, run:
npm start

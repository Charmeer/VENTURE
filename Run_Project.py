aimport subprocess
import time

import os

backend_path = os.path.join(os.path.dirname(__file__), "backend")
frontend_path = os.path.join(os.path.dirname(__file__), "frontend")

print("\n🚀 Starting Finalessimo Project...\n")

# Check if Node.js is available
try:
    import shutil
    if not shutil.which('node'):
        print("❌ Error: Node.js not found. Please make sure Node.js is installed.")
        exit(1)
    
    # Start backend in a new terminal window
    subprocess.Popen(
        f'start cmd /k "cd /d {backend_path} && node server.js"',
        shell=True
    )
    print("✅ Backend server starting...")
except Exception as e:
    print(f"❌ Error starting backend: {e}")
    exit(1)

# Small delay so backend starts first
time.sleep(3)

# Check if npm is available
try:
    if not shutil.which('npm'):
        print("❌ Error: npm not found. Please make sure Node.js and npm are installed.")
        exit(1)
    
    # Start frontend in a new terminal window
    subprocess.Popen(
        f'start cmd /k "cd /d {frontend_path} && npm run dev"',
        shell=True
    )
    print("✅ Frontend server starting...")
except Exception as e:
    print(f"❌ Error starting frontend: {e}")
    exit(1)

# Show addresses
print("✅ Backend running at:")
print("   👉 http://localhost:5000")

print("\n✅ Frontend running at:")
print("   👉 http://localhost:3000")

print("\n🌐 Open the frontend URL in your browser to view the website.")
print("🛑 Close the terminal windows to stop the servers.\n")
print("📋 Servers are now running. You can close this window and the servers will continue running.")

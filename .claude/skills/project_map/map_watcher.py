import time
import json
import os
from pathlib import Path
from ai_map_updater import create_project_map

UPDATE_INTERVAL = 60 # 1 minutes
CONFIG_FILE = Path(__file__).parent / "watcher_config.json"

def load_config():
    """Load saved configuration if it exists."""
    if CONFIG_FILE.exists():
        try:
            with open(CONFIG_FILE, 'r') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError):
            return None
    return None

def save_config(fe_path, be_path):
    """Save the current configuration."""
    config = {
        "frontend_path": fe_path,
        "backend_path": be_path
    }
    with open(CONFIG_FILE, 'w') as f:
        json.dump(config, f, indent=2)

def ask_project_paths():
    """Interactively confirm or change project paths at startup."""
    config = load_config()

    if config:
        fe_path = config.get("frontend_path")
        be_path = config.get("backend_path")

        print("\nCurrent configuration:")
        print(f"  Frontend: {fe_path or '(none)'}")
        print(f"  Backend:  {be_path or '(none)'}")

        response = input("\nUse these paths? [Y/n]: ").strip().lower()
        if response == "" or response == "y" or response == "yes":
            return fe_path, be_path

        print("\nEnter new paths:")
    else:
        print("Welcome to AI Map Watcher!")
        print("No saved configuration found. Please enter paths:\n")

    fe_path = input("Frontend root path (or leave blank if none): ").strip()
    if fe_path == "":
        fe_path = None

    be_path = input("Backend root path (or leave blank if none): ").strip()
    if be_path == "":
        be_path = None

    # Save the new configuration
    save_config(fe_path, be_path)
    print("Configuration saved.")

    return fe_path, be_path

if __name__ == "__main__":
    print("AI Map Watcher Starting...")

    # Load or ask for paths
    fe_path, be_path = ask_project_paths()

    # Always create/update the map at startup
    create_project_map(fe_path=fe_path, be_path=be_path)

    print(f"AI Map Watcher Running... updates every {UPDATE_INTERVAL} seconds.")

    while True:
        time.sleep(UPDATE_INTERVAL)
        print("Watcher tick: regenerating project map...")
        create_project_map(fe_path=fe_path, be_path=be_path)

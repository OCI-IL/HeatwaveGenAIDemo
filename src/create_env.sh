#!/bin/bash

# Function to prompt the user for input and store it in a variable
collect_input() {
    local var_name=$1
    local prompt_message=$2

    read -p "$prompt_message" $var_name
}

# Static value for PORT
PORT=3003

# Collecting the required environment variables from the user
collect_input DB_IP "Enter the DB_IP: "
collect_input DB_USER "Enter the DB_USER: "
collect_input DB_PASSWORD "Enter the DB_PASSWORD: "
collect_input DB_NAME "Enter the DB_NAME: "
collect_input PAR_DB "Enter the PAR_DB: "
collect_input REACT_APP_PAR_WEB "Enter the REACT_APP_PAR_WEB: "


# Creating the .env file content for frontend and backend
frontend_env_content="REACT_APP_PAR=${REACT_APP_PAR_WEB}"
backend_env_content="PORT=${PORT}
PAR_DB=${PAR_DB}
DB_IP=${DB_IP}
DB_USER=${DB_USER}
DB_PASSWORD=${DB_PASSWORD}
DB_NAME=${DB_NAME}"

# Define the directories
frontend_dir="./frontend"
backend_dir="./backend"

# Save the .env file content to the frontend and backend directories
echo "$frontend_env_content" > "$frontend_dir/.env"
echo "$backend_env_content" > "$backend_dir/.env"

# Confirmation message
echo ".env file has been created in $frontend_dir and $backend_dir."

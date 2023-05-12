
# MERN Stack Patient Portal Software for Providers
check it out here :) : https://al-dente.cyclic.app/

This is a patient portal software built on the MERN (MongoDB, Express, React, Node.js) stack, designed for providers who don't have access to the main software called SoftDent.

## Features

- Secure login for providers
- Dashboard displaying upcoming appointments and patient information
- Search for patients by name or ID
- View patient details, including medical history, treatment plans, and notes
- Add new patients and schedule appointments
- Send messages to patients and receive replies
- Manage patient accounts, including updating personal information and resetting passwords
- Integration with Google Maps for directions to the clinic


To install the software, follow these steps:
# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`
  - 
## Installation

1. Clone the repository to your local machine.
2. Install MongoDB and Node.js if not already installed.
3. In the root directory of the project, run the command `npm install` to install the necessary dependencies.
4. In the `client` directory, run the command `npm install` to install the client-side dependencies.
5. Create a `.env` file in the root directory of the project with the following variables:
   - `MONGODB_URI`: the URI for your MongoDB database
   - `JWT_SECRET`: a secret key used for JWT authentication
6. Run the command `npm start` in the root directory of the project to start the server and client.

## Usage

Once the software is installed and running, providers can access the patient portal by visiting `http://localhost:3000` in their web browser and logging in with their credentials. From there, they can navigate to the various features of the software using the sidebar.

## Disclaimer

Please note that this software is not intended to replace SoftDent and may not have all the features necessary for full patient management. It is intended as a basic patient portal software for providers who do not have access to the main software.

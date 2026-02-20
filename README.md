# IDO Mini 🌊🤖
**Identified Diving Object - A "NewPOV" Underwater Exploration System**

[![Website Status](https://img.shields.io/badge/Website-Live-cyan?style=for-the-badge)](https://ido.codevelly.in/)
[![Status](https://img.shields.io/badge/Status-Active_Development-success?style=for-the-badge)](#)

> **"It is not just a drone; it is a portal to a world we usually fly over."**

**Live Interactive 3D Portal & Logs:** [https://ido.codevelly.in/](https://ido.codevelly.in/)

---

## 📖 Project Briefing
**IDO Mini** is a hybrid entertainment system and miniature underwater ROV (Remotely Operated Vehicle).



## 🏗️ System Architecture
To maximize efficiency and keep the rover as small as possible, the IDO Mini uses a **Master-Slave Tethered Architecture**:

1. **The Rover (IDO Mini):** The agile underwater unit. Features a custom 3D-printed hull, a **piston ballast tank** for precise depth control, and a front-mounted camera.
2. **The Surface Boat:** The "brain" of the operation. It houses the main power supply and the wireless receiver, sending power and commands down a physical tether to the rover.
3. **The Transmitter:** A custom-built 12-channel radio controller engineered for high-precision differential steering.

## ⚙️ Engineering Innovations
* **Tank Steering (Differential Thrust):** Traditional rudders require too much space to turn in a confined fish tank. IDO uses tank steering—slowing the left motor and speeding up the right—to pivot 360° in place.
* **Hollowed 3D Web Rendering:** The project website features a live interactive 3D model of the rover. To maintain lightning-fast web performance, a highly optimized, hollowed-out `.3mf` mesh was exported and rendered using Vanilla JS and `Three.js` (`OrbitControls` with damping enabled).

## 🛠️ Hardware Stack (Transmitter MVP)
The custom 12-channel remote controller is built from the ground up to handle complex underwater navigation telemetry:

* **Microcontroller:** ESP32-S3 Development Board
* **Wireless Comm:** NRF24L01 + PA + LNA (with a 5V adapter for stable 3.3V regulation)
* **User Input:** 2x PS2 Joysticks, 2x Toggle Switches, 4x Tactile Buttons
* **Telemetry Display:** 1.3" OLED Display (I2C)
* **Power System:** 2x 18650 Li-Ion Batteries (Parallel) + TP4056 USB-C Charger + MT3608 Voltage Booster (5V output)
* **Sensors & Alerts:** MPU6050 Gyroscope (for future tilt-control) & Active Buzzer

## 💻 Web & Software Stack
* **Microcontroller Code:** C++ (Arduino IDE)
* **Web Frontend:** HTML5, CSS3, Vanilla JavaScript
* **3D Web Rendering:** Three.js
* **Deployment:** Hosted on GitHub, deployed via Vercel

## 🚀 Current Development Status
- [x] Comprehensive 3D CAD design for the MVP hull.
- [x] Custom 12-Channel ESP32 Transmitter assembled and tested.
- [x] `CodeVelly` Web portal launched with live Three.js interactive rendering.
- [ ] Development of the Receiver Module for the surface boat.
- [ ] Physical 3D fabrication of the rover hull.
- [ ] Waterproofing and buoyancy field testing.

---
*Designed and engineered by Arnab Biswas for the Blue Ocean Competition.*

import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024 - PRESENT',
    title: 'Techno India University',
    subtitle: 'B.Tech in Computer Science (3rd Year)',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'HACKATHON EXPERIENCE',
    subtitle: '• AI Ignite — Created GenAI virtual dress try-on.\n• Auraflix — Developed low-latency streaming.\n• Educhain — Built Web3 skill-trading platform.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'HACKATHON EXPERIENCE',
    subtitle: '• Build on CELO — Built HireNexa AI recruitment.\n• Algorand Build Station — Medical storage + prediction.\n• Avalanche — Developed decentralized storage.\n• DriveBlaze — Built MockPitch AI interview prep.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'HACKATHON EXPERIENCE',
    subtitle: '• Hacktonix ’26 — Built SwyftPay payment gateway.\n• Hack Storm — Built Proofly secure wallet.\n• HackTropica — Built InfinityCare health data.\n• BINARY v2 — Built Healix healthcare solution.\n• DoubleSlash 4.0 — Built SYNTROPY cash/chain.\n• INNOVATEX 1.0 — Built Silo Sentinel IoT device.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'PRESENT',
    title: 'Always Building',
    subtitle: 'Building polished products across AI/ML, Blockchain, and Full-Stack Engineering.',
    position: 'right',
  }
];
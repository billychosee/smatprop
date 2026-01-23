export interface Device {
  title: string;
  imageSrc: string;
  modalImageSrc?: string;
  modalDescription: string;
  details: string[];
}

export const deviceData: Device[] = [
  {
    title: "Access",
    imageSrc: "/biometric-devices.png",
    modalImageSrc: "/biometric-devices.png",
    modalDescription:
      "Advanced biometric access control device for secure entry.",
    details: [
      "Facial recognition technology",
      "Real-time access logging",
      "Integration with existing systems",
      "Mobile app compatibility",
    ],
  },
  {
    title: "Control",
    imageSrc: "/devices.png",
    modalImageSrc: "/devices.png",
    modalDescription:
      "Centralized control system for managing access across multiple points.",
    details: [
      "Centralized management dashboard",
      "Multi-site support",
      "Automated reporting",
      "Customizable access rules",
    ],
  },
];





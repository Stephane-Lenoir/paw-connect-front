// components/Toast.js
'use client';

import { useToast } from '../context/toastContext';

export default function Toast() {
  const { showToast, toastMessageIndex, isSuccess } = useToast();

  const successMessages = [
    "Formulaire d'hébergement envoyé avec succés.",
    "Formulaire d'adoption, envoyé avec succés.",
    'Login réussi.',
    'Inscription réussie.',
    'logout réussi.',
    "Création d'un animal réussie.",
    "Modification d'un animal réussie.",
    "Suppression d'un animal réussie.",
    "Suppression d'un utilisateur réussie.",
    "Modification d'un utilisateur réussie.",
  ];

  const errorMessages = [
    "Erreur dans l'envoi du formulaire d'hébergement",
    "Erreur dans l'envoi du formulaire d'adoption",
    'Erreur dans le login',
    "Erreur dans l'inscription",
    'Erreur dans le logout',
    "Erreur dans la création de l'animal",
    "Erreur dans la modification de l'animal",
    "Erreur dans la suppression de l'animal",
    "Erreur dans la suppression de l'utilisateur",
    "Erreur dans la modification de l'utilisateur",
  ];

  const message = isSuccess ? successMessages[toastMessageIndex] : errorMessages[toastMessageIndex];

  if (!showToast) return null;

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert ${isSuccess ? 'alert-success' : 'alert-error'}`}>
        <span>{message}</span>
      </div>
    </div>
  );
}

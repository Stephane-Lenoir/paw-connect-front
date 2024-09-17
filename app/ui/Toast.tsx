'use client';

import { useToast } from '../context/toastContext';

export default function Toast() {
  const { showToast, toastMessageIndex, isSuccess, customMessage } = useToast();

  const successMessages = [
    "Formulaire d'hébergement envoyé avec succés.",
    "Formulaire d'adoption, envoyé avec succés.",
    'Login réussi.',
    'Inscription réussie.',
    'logout réussi.',
    "Ajout d'un animal réussie.",
    "Modification d'un animal réussie.",
    "Suppression d'un animal réussie.",
    "Suppression d'un utilisateur réussie.",
    "Modification d'un utilisateur réussie.",
    'Status de la requête modifié avec succès.',
<<<<<<< HEAD
<<<<<<< HEAD
    'Suppression de la requête réussie',
=======
>>>>>>> d2d26d2 (add toast on animals and dashboards)
=======
    'Suppression de la requête réussie',
>>>>>>> 2aaae76 (fix toasts bugs and font change on button)
  ];

  const errorMessages = [
    "Erreur dans l'envoi du formulaire d'hébergement",
    "Erreur dans l'envoi du formulaire d'adoption",
    'Erreur dans le login',
    "Erreur dans l'inscription",
    'Erreur dans le logout',
    "Erreur dans l'ajout de l'animal",
    "Erreur dans la modification de l'animal",
    "Erreur dans la suppression de l'animal",
    "Erreur dans la suppression de l'utilisateur",
    "Erreur dans la modification de l'utilisateur",
    'Erreur dans la modification du status de la requête',
<<<<<<< HEAD
<<<<<<< HEAD
    'Suppression de la requête échouée',
=======
>>>>>>> d2d26d2 (add toast on animals and dashboards)
=======
    'Suppression de la requête échouée',
>>>>>>> 2aaae76 (fix toasts bugs and font change on button)
  ];

  const message =
    customMessage ||
    (isSuccess ? successMessages[toastMessageIndex] : errorMessages[toastMessageIndex]);

  if (!showToast) return null;

  return (
    <div className="toast toast-top toast-end">
      <div className={`alert ${isSuccess ? 'alert-success' : 'alert-error'}`}>
        <span>{message}</span>
      </div>
    </div>
  );
}

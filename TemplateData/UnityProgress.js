function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module)
    return;

    if (!unityInstance.logo)
    {
        unityInstance.logo = document.getElementById("custom-logo");
        unityInstance.logo.style.display = "block";
        unityInstance.container.appendChild(unityInstance.logo);
    }

    if (progress == 1)
    {
        unityInstance.logo.style.display = "none";
    }
}
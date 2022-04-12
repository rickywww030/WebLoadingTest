function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module)
    return;


    /*Logo顯示*/
    if (!unityInstance.logo)
    {
        unityInstance.logo = document.getElementById("custom-logo");
        unityInstance.logo.style.display = "block";
        unityInstance.container.appendChild(unityInstance.logo);
    }

    /*跑條顯示*/
    if (!unityInstance.progress) 
    {
    unityInstance.progress = document.getElementById("custom-loader");
    unityInstance.progress.style.display = "block";
    unityInstance.container.appendChild(unityInstance.progress);

    }
    setLeaderProgressTo(progress);

    if (progress == 1)
    {
        unityInstance.logo.style.display = "none";/*載入完成後將Logo隱藏*/
        unityInstance.progress.style.display = "none";/*載入完成後將跑條隱藏*/
    }


    



/*
  if (!unityInstance.logo) {
    unityInstance.logo = document.createElement("div");
    unityInstance.logo.className = "logo " + unityInstance.Module.splashScreenStyle;
    unityInstance.container.appendChild(unityInstance.logo);
  }
  if (!unityInstance.progress) {    
    unityInstance.progress = document.createElement("div");
    unityInstance.progress.className = "progress " + unityInstance.Module.splashScreenStyle;
    unityInstance.progress.empty = document.createElement("div");
    unityInstance.progress.empty.className = "empty";
    unityInstance.progress.appendChild(unityInstance.progress.empty);
    unityInstance.progress.full = document.createElement("div");
    unityInstance.progress.full.className = "full";
    unityInstance.progress.appendChild(unityInstance.progress.full);
    unityInstance.container.appendChild(unityInstance.progress);
  }
  unityInstance.progress.full.style.width = (100 * progress) + "%";
  unityInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
  if (progress == 1)
    unityInstance.logo.style.display = unityInstance.progress.style.display = "none";
    */
}


    //value 參數為0-1
function setLeaderProgressTo(value)
{
    const fill = unityInstance.progress.getElementsByClassName("fill")[0];
    const fillText = unityInstance.progress.getElementsByClassName("label")[0];
    
    fill.animate
    (
        [
        {width: (value *100) +"%"}
        ],
        {
        duration:300,
        fill: "forwards"
        }
    );

    fillText.textContent = (value*100).toFixed() +"%";    
}


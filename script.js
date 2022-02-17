/*function switchTo(target) {
  console.log('switch to:', target);
  let targetElement = document.getElementById(target);
  let activeElements = document.getElementsByClassName('active');
  let activeNavBtns = document.querySelectorAll('button[aria-selected="true"]');
  let targetBtn = document.querySelector('button[data-bs-target="#' + target + '"]');
  console.log({
    activeElements: activeElements
  });
  console.log({
    activeNavBtns: activeNavBtns
  });
  console.log({
    targetBtn: targetBtn
  });
  if (targetElement) {
    for (let item of activeElements) {
      item.classList.remove("active");
      console.log({
        item: item
      });
    }
    for (let item of activeNavBtns) {
      item.setAttribute('aria-selected', false);
    }
    targetElement.classList.add("active");
    targetBtn.setAttribute('aria-selected', true);
  } else {
    console.error('The target element not found...');
  }
}*/

/*
  Enable tabbable tabs via JavaScript (each tab needs to be activated individually):

  https://getbootstrap.com/docs/5.0/components/navs-tabs/#via-javascript
*/
window.addEventListener('DOMContentLoaded', (event) => {
  let triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
  triggerTabList.forEach(function (triggerEl) {
    let tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
});

/*
  You can activate individual tabs:
*/
function switchTo(target) {
  let triggerEl = document.querySelector('#myTab button[data-bs-target="#' + target + '"]');
  bootstrap.Tab.getInstance(triggerEl).show();
}
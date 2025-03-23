

document.addEventListener("DOMContentLoaded", () =>{
    fetch("../assets/data/members.json")
    .then(response => response.json())
    .then(data => renderMembers(data))
    .catch(error => console.error("Error loading member data:", error));
})


// function renderMembers(members) {
//     const container = document.querySelector(".About__carousel-outer");
//     container.innerHTML = ""; // Clear existing content
    
//     members.forEach(member => {
//       const memberCard = `
//        <div class="About__team-card">
//                 <div class="About__top-container">
//                     <img
//                         class="About__photo-container"
//                         src="${member.image}"
//                         alt="${member.name}"
//                     />
//                     <div class="About__member-information">
//                         <h1>MEMBER INFORMATION</h1>
//                         <div class="About__member-details">
//                             <div class="About__detail-row">
//                                 <div class="About__detail-label">Name</div>
//                                 <div class="About__detail-separator">:</div>
//                                 <div class="About__detail-value">
//                                     ${member.name}
//                                 </div>
//                             </div>
//                             <div class="About__detail-row">
//                                 <div class="About__detail-label">Position</div>
//                                 <div class="About__detail-separator">:</div>
//                                 <div class="About__detail-value">
//                                     ${member.position}
//                                 </div>
//                             </div>
//                             <div class="About__detail-row">
//                                 <div class="About__detail-label">Age</div>
//                                 <div class="About__detail-separator">:</div>
//                                 <div class="About__detail-value">
//                                     ${member.age}
//                                 </div>
//                             </div>
//                             <div class="About__detail-row">
//                                 <div class="About__detail-label">Birthday</div>
//                                 <div class="About__detail-separator">:</div>
//                                 <div class="About__detail-value">
//                                     ${member.birthday}
//                                 </div>
//                             </div>
//                             <div class="About__detail-row">
//                                 <div class="About__detail-label">Address</div>
//                                 <div class="About__detail-separator">:</div>
//                                 <div class="About__detail-value">
//                                     ${member.address}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="bottom-container">
//                     <p>
//                         ${member.description}
//                     </p>
//                 </div>
//             </div>
//       `;
//       container.innerHTML += memberCard;
//     });
//   }

function renderMembers(members) {
    const outerContainer = document.querySelector(".About__carousel-outer");
    outerContainer.innerHTML = ""; // Clear existing content

    members.forEach(member => {
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner");

        innerDiv.innerHTML = `
            <div class="About__team-card">
                <div class="About__top-container">
                    <img
                        class="About__photo-container"
                        src="${member.image}"
                        alt="${member.name}"
                    />
                    <div class="About__member-information">
                        <h1>MEMBER INFORMATION</h1>
                        <div class="About__member-details">
                            <div class="About__detail-row">
                                <div class="About__detail-label">Name</div>
                                <div class="About__detail-separator">:</div>
                                <div class="About__detail-value">${member.name}</div>
                            </div>
                            <div class="About__detail-row">
                                <div class="About__detail-label">Position</div>
                                <div class="About__detail-separator">:</div>
                                <div class="About__detail-value">${member.position}</div>
                            </div>
                            <div class="About__detail-row">
                                <div class="About__detail-label">Age</div>
                                <div class="About__detail-separator">:</div>
                                <div class="About__detail-value">${member.age}</div>
                            </div>
                            <div class="About__detail-row">
                                <div class="About__detail-label">Birthday</div>
                                <div class="About__detail-separator">:</div>
                                <div class="About__detail-value">${member.birthday}</div>
                            </div>
                            <div class="About__detail-row">
                                <div class="About__detail-label">Address</div>
                                <div class="About__detail-separator">:</div>
                                <div class="About__detail-value">${member.address}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-container">
                    <p>${member.description}</p>
                </div>
            </div>
        `;

        outerContainer.appendChild(innerDiv);
    });
}


// gallery.js

window.addEventListener("load", () => {
    const outer = document.querySelector(".About__carousel-outer");
  
    // Duplicate the contents for infinite effect
    outer.innerHTML += outer.innerHTML;
  
    let scrollSpeed = 1; // Adjust speed (higher = faster)
    function autoScroll() {
      outer.scrollLeft += scrollSpeed;
  
      // Reset to start once halfway (original set length) is reached
      if (outer.scrollLeft >= outer.scrollWidth / 2) {
        outer.scrollLeft = 0;
      }
  
      requestAnimationFrame(autoScroll);
    }
  
    autoScroll();
  });
  

(()=>{let n=new BBModal(document.getElementById("EventsDetailModal")),o=document.getElementById("EventCalendarLinks"),r=document.getElementById("EventsDetailContent");async function t(e){var t=e.querySelector(".event-title").textContent.toLowerCase().replace(/[ ']/g,"-");bioHTML=await(await fetch(`/band-info/${t}/bio.html`)).text(),r.innerHTML=e.innerHTML,r.querySelector(".event-description").innerHTML=bioHTML,o.innerHTML=(({startTime:e,date:t,title:n})=>{var o="136 Washington St., Norwalk, CT 06851",t=t.replaceAll("-","");let r=parseInt(e);return e.includes("PM")&&(r+=12),e=`${t}T${r}00Z`,t=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(n)}&dates=${e}&location=`+encodeURIComponent(o),e=`BEGIN:VCALENDAR
                VERSION:2.0
                BEGIN:VEVENT
                URL:${document.URL}
                DTSTART:${e}
                SUMMARY:${n}
                LOCATION:${o}
                END:VEVENT
                END:VCALENDAR`,n=new Blob([e],{type:"text/calendar"}),`
            <a href="${t}" class="calendar-link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg> 
                Add to Google Calendar</a>

            <a href="${URL.createObjectURL(n)}" class="calendar-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg> 
                Add to Calendar (ics)</a>
        `})(e.dataset),n.open()}document.addEventListener("click",async e=>{"A"!==e.target.tagName&&(e=e.target.closest(".event"))&&t(e)})})();
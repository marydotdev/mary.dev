
<div class="marquee" style="--tw: 100ch; --ad: 12s;">
	<span>Looking for a JavaScript developer? You're in luck! Email Mary at <a href="mailto:hello@mary.dev?subject=Hey Mary, I'm looking for a developer!">hello@mary.dev</a> to learn more.
   </span>
</div>

<style>
.marquee {
   overflow: hidden;
}

.marquee span {   
    display: inline-block;
    white-space: nowrap;
    width: var(--tw);
    text-shadow: var(--tw) 0 currentColor, 
                 calc(var(--tw) * 2) 0 currentColor, 
                 calc(var(--tw) * 3) 0 currentColor,
                 calc(var(--tw) * 4) 0 currentColor;
   
    will-change: transform;
    animation: marquee var(--ad) linear infinite;
    animation-play-state: running;
}

.marquee:hover span {
    animation-play-state: paused;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

/*  
 * on MacOs: System Preferences > 
 *           Accessibility > 
 *           Display > Reduce motion
 */

@media (prefers-reduced-motion: reduce) {
  .marquee span {
    animation: none;
    text-shadow: none;
    width: auto;
    display: block;
    line-height: 1.5;
    text-align: center;
    white-space: normal;
  }
}

</style>
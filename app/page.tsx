import PageScripts from "@/components/PageScripts";

export default function AboutPage() {
  return (
    <>

      <a className="skip-link" href="#main">Skip to main content</a>

      {/* Utility bar */}
      <div className="utility">
        <div className="container-wide">
          <a className="aog" href="/aog"><span className="dot"></span> Request AOG — 24/7 line</a>
          <div className="sep" aria-hidden="true"></div>
          <div className="certs" aria-label="Accreditations">
            <span>AS9120:2015</span><span>ISO 9001:2015</span><span>FAA AC 00-56B</span>
          </div>
          <a className="phone mono" href="tel:+17147054780">+1 (714) 705-4780</a>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="container-wide">
          <a className="brand" href="/" aria-label="ASAP Aerospace & Defense home">
            <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect width="40" height="40" rx="8" fill="oklch(18% .02 250)" />
              <path d="M8 26 L20 8 L32 26 L20 20 Z" fill="oklch(58% .18 255)" />
              <path d="M12 30 L20 24 L28 30 Z" fill="#fff" fillOpacity=".85" />
            </svg>
            <span className="brand-text">
              <b>ASAP</b>
              <small>Aerospace &amp; Defense</small>
            </span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="/catalogue">Catalogue</a>
            <a href="/manufacturers">Manufacturers</a>
            <a href="/tools">Tools</a>
            <a href="/about" aria-current="page">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="header-actions">
            <a className="search-mini" href="/catalogue" aria-label="Search the parts catalogue">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
              Search catalogue…
            </a>
            <a className="cart" href="/rfq/cart" aria-label="RFQ cart">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 4h2l2.4 12.4a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 8H6" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
              RFQ Cart <span className="badge mono">0</span>
            </a>
            <a className="btn" href="/rfq">Request a Quote</a>
            <button className="menu-toggle" aria-label="Open menu">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      <main id="main">

        {/* ========================== MASTHEAD ========================== */}
        <section className="masthead" id="top">
          <div className="container-wide">
            <div className="mh-grid">
              <div className="mh-lead">
                <span className="kicker">About ASAP</span>
                <h1>An independent aerospace &amp; <em>defense</em> parts distributor.</h1>
                <p className="lede">Since 2009, ASAP has supplied the flight lines, repair stations and defense programs that keep aircraft moving — sourcing any part from a two-billion-line catalogue with named accountability and audit-ready paperwork on every order.</p>
              </div>

              {/* Company facts card — fills the right-hand whitespace */}
              <aside className="mh-facts" aria-label="Company facts">
                <div className="fh"><span>Company facts</span><span className="live"><span className="d" aria-hidden="true"></span> Anaheim, CA</span></div>
                <div className="f"><div className="k">Founded</div><div className="v">2009</div><div className="sub">Independent, privately held</div></div>
                <div className="f"><div className="k">Registrations</div><div className="v">AS9120:2015 · ISO 9001:2015</div><div className="sub">FAA AC 00-56B accredited</div></div>
                <div className="f"><div className="k">CAGE Code</div><div className="v">6RE77</div><div className="sub">FAR / DFARS flow-down ready</div></div>
                <div className="f"><div className="k">Reach &amp; support</div><div className="v">Worldwide</div><div className="sub">USA &amp; allies · 24/7 AOG desk</div></div>
              </aside>
            </div>

            <div className="mh-photo" role="img" aria-label="Business jet on the ramp at dusk">
              <span className="bg" aria-hidden="true"></span>
              <span className="mh-cap"><span className="dot" aria-hidden="true"></span> Anaheim, California — serving commercial, business &amp; defense aviation</span>
            </div>
          </div>
        </section>

        {/* ========================= OUR STORY ========================= */}
        <section className="section story" id="story">
          <div className="container">
            <div className="story-grid">
              <div className="story-lead reveal">
                <span className="kicker">Our story</span>
                <h2>Founded to answer the question the industry kept dodging.</h2>
                <p>ASAP began in 2009 with a simple frustration: buyers on the flight line were waiting days for a quote that should have taken minutes — and getting placeholder pricing when it finally arrived. We set out to be the independent distributor that answered differently.</p>
                <p>No OEM allegiance. No routing you to whoever pays for the placement. Just a named account manager who owns your request end to end, sources it from wherever it actually stocks, and returns it priced, lead-timed and traceable. Fifteen years on, that discipline scaled into a catalogue of two billion part numbers and a network of 5,100+ manufacturers — without changing what a single request feels like.</p>
                <div className="story-founder">
                  <span className="fa">MR</span>
                  <span>
                    <span className="fn" style={{ display: 'block' }}>Marcus Reyes</span>
                    <span className="fr">Founder &amp; CEO — 15 years in flight-line procurement</span>
                  </span>
                </div>
              </div>

              <ol className="tl reveal" aria-label="Company milestones" style={{ listStyle: 'none', margin: '0', paddingLeft: '1.9rem' }}>
                <li className="tl-item">
                  <div className="tl-year">2009</div>
                  <h3>Founded in Anaheim, California</h3>
                  <p>Opened as an independent aerospace &amp; defense parts distributor with one operating rule: every request gets a named owner and a real answer.</p>
                </li>
                <li className="tl-item">
                  <div className="tl-year">2012</div>
                  <h3>AS9120 &amp; ISO 9001 registered</h3>
                  <p>Stood up a formal quality system — lot traceability and certificates of conformance on every line, by default.</p>
                </li>
                <li className="tl-item">
                  <div className="tl-year">2015</div>
                  <h3>Named to the Inc. 500</h3>
                  <p>Recognized among America's fastest-growing private companies as the independent model proved out at scale.</p>
                </li>
                <li className="tl-item">
                  <div className="tl-year">2018</div>
                  <h3>Catalogue passes one billion part numbers</h3>
                  <p>Supplier network crossed 3,000+ manufacturers; FAA AC 00-56B distribution accreditation added.</p>
                </li>
                <li className="tl-item">
                  <div className="tl-year">2021</div>
                  <h3>24/7 AOG desk established</h3>
                  <p>Formalized the 15-minute RFQ response standard — day or night, AOG or not.</p>
                </li>
                <li className="tl-item">
                  <div className="tl-year">Today</div>
                  <h3>2B part numbers · 100M parts shipped</h3>
                  <p>Serving 60,000+ organizations across commercial, business and defense aviation — still independent, still audit-ready.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ======================== WHAT WE DO ======================== */}
        <section className="section whatwedo" id="what-we-do">
          <div className="container">
            <div className="section-head wwd-head reveal">
              <div className="wwd-head-title">
                <span className="kicker">What we do</span>
                <h2>Six disciplines, one standard of ownership.</h2>
              </div>
              <p>The catalogue is only the surface. What defines ASAP is how a request is handled once it lands — the same named accountability and traceable paperwork whether it's a single obsolete connector or a full program supply chain.</p>
            </div>

            <div className="wwd-grid stagger">
              <article className="wwd-item wwd-lead">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l2 5 4-12 2 7h6" /></svg></div>
                <span className="num">01</span>
                <h3>Solutions-driven purchasing</h3>
                <p>Every RFQ gets a named account manager. Every quote returns priced and lead-timed — not a placeholder, not a call-back. We route your request through the sources that actually stock it.</p>
                <ul className="wwd-list">
                  <li>Named account manager per RFQ</li>
                  <li>Priced &amp; lead-timed responses</li>
                  <li>Hard-to-find, obsolete &amp; long-lead sourcing</li>
                </ul>
              </article>

              <article className="wwd-item wwd-a">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></div>
                <span className="num">02</span>
                <h3>24/7 customer service</h3>
                <p>Procurement teams hate waiting and they hate placeholder pricing. Our RFQ team supports requests around the clock with a 15-minute response SLA — AOG or not.</p>
              </article>

              <article className="wwd-item wwd-b">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg></div>
                <span className="num">03</span>
                <h3>Quality &amp; traceability</h3>
                <p>AS9120, ISO 9001 and FAA AC 00-56B accredited. Every line ships with traceable lot certification and documented sourcing across all categories.</p>
              </article>

              <article className="wwd-item wwd-c">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7 12 12l8.7-5M12 22V12" /></svg></div>
                <span className="num">04</span>
                <h3>AOG &amp; critical logistics</h3>
                <p>Aircraft-on-ground requests jump the queue. Same-day expedite, hand-carry and dedicated freight coordination when downtime is measured in dollars per minute.</p>
              </article>

              <article className="wwd-item wwd-d">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v4H4zM4 12h10v8H4zM18 12h2v8h-2z" /></svg></div>
                <span className="num">05</span>
                <h3>BOM &amp; kitting</h3>
                <p>Upload a full bill of materials and get it quoted line-by-line. We consolidate multi-manufacturer kits into a single traceable shipment and PO.</p>
              </article>

              <article className="wwd-item wwd-e">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l3-8 6 16 3-8h4" /></svg></div>
                <span className="num">06</span>
                <h3>Defense &amp; NSN supply</h3>
                <p>NSN, CAGE and NIIN-indexed procurement with full FAR/DFARS flow-down compliance — proudly supporting the USA and her allies.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== MISSION & VALUES ==================== */}
        <section className="section mv on-dark" id="mission">
          <div className="container">
            <div className="mv-head reveal">
              <div className="mv-intro">
                <span className="kicker">Mission &amp; values</span>
                <blockquote>To be the independent buyers trust when the answer has to be <em>right, traceable and fast</em>.</blockquote>
                <p className="mv-lede">We don't measure ourselves by catalogue size. We measure ourselves by whether the person on the other end of a request got a real answer they could act on — and could prove where it came from.</p>
                <ul className="mv-metrics" aria-label="How we're measured">
                  <li><span className="v">15<small>min</small></span><span className="k">Median RFQ response</span></li>
                  <li><span className="v">100<small>%</small></span><span className="k">Lines with a C-of-C</span></li>
                  <li><span className="v">24/7</span><span className="k">Named AOG desk</span></li>
                </ul>
              </div>

              <ol className="mv-values stagger" aria-label="Our values">
                <li className="mv-value">
                  <span className="n">01</span>
                  <div className="b"><h3>Independent</h3><p>No OEM allegiance and no pay-to-place. We source from wherever the part actually stocks — the recommendation is always yours, not a supplier's.</p></div>
                </li>
                <li className="mv-value">
                  <span className="n">02</span>
                  <div className="b"><h3>Traceable</h3><p>Lot traceability and a certificate of conformance on every line, by default. Audit evidence is the baseline, not an upsell.</p></div>
                </li>
                <li className="mv-value">
                  <span className="n">03</span>
                  <div className="b"><h3>Accountable</h3><p>A named account manager owns each request end to end. No queues, no hand-offs, no placeholder pricing.</p></div>
                </li>
                <li className="mv-value">
                  <span className="n">04</span>
                  <div className="b"><h3>Responsive</h3><p>The 15-minute response standard holds day or night. When an aircraft is grounded, urgency is the whole job.</p></div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ========================== REEL ========================== */}
        <section className="reel on-dark" aria-label="ASAP in motion">
          <div className="container-wide">
            <figure className="reel-frame reveal" style={{ margin: '0' }}>
              <video src="/media/facility.mp4" autoPlay muted loop playsInline preload="metadata"
                     aria-label="ASAP aerospace &amp; defense operations"></video>
              <span className="reel-kicker">In motion</span>
              <figcaption className="reel-cap"><span className="dot" aria-hidden="true"></span> Keeping aircraft moving — commercial, business &amp; defense aviation</figcaption>
            </figure>
          </div>
        </section>

        {/* ======================== WHO WE SERVE ======================== */}
        <section className="section serve on-dark" id="who-we-serve">
          <div className="container">
            <div className="section-head reveal">
              <span className="kicker">Who we serve</span>
              <h2>Trusted across the flight line, the shop floor and the field.</h2>
              <p>60,000+ organizations rely on ASAP — from single-aircraft operators to prime defense contractors. Different missions, the same requirement: the right part, provable, on time.</p>
            </div>

            <div className="serve-layout">
              {/* Reach panel — promotes the old bottom strip into real content */}
              <aside className="reach-panel reveal" aria-label="Global reach">
                <div className="rp-stat">
                  <span className="v">60<small>K+</small></span>
                  <span className="k">Organizations served, from single-tail operators to prime contractors.</span>
                </div>
                <ul className="rp-list">
                  <li>
                    <span className="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" /></svg></span>
                    <span><b>Ship worldwide</b><span>Domestic &amp; export · ITAR-aware handling</span></span>
                  </li>
                  <li>
                    <span className="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
                    <span><b>24/7 AOG desk</b><span>Aircraft-on-ground response, day or night</span></span>
                  </li>
                  <li>
                    <span className="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg></span>
                    <span><b>FAR / DFARS ready</b><span>Full flow-down on controlled items</span></span>
                  </li>
                </ul>
                <div className="rp-metrics">
                  <div className="rm"><span className="v">2B</span><span className="k">Part numbers</span></div>
                  <div className="rm"><span className="v">5,100+</span><span className="k">Manufacturers</span></div>
                  <div className="rm"><span className="v">100M</span><span className="k">Parts shipped</span></div>
                </div>
              </aside>

              {/* Segments as editorial rows with credential tags */}
              <div className="serve-rows stagger">
                <article className="serve-row">
                  <span className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12l20-7-7 20-3-9-10-4z" /></svg></span>
                  <div>
                    <div className="st"><h3>Airlines &amp; operators</h3><span className="tag">Commercial · Regional</span></div>
                    <p>Line and base maintenance sourcing for commercial and regional fleets, with expedite lanes when schedules slip.</p>
                  </div>
                </article>
                <article className="serve-row">
                  <span className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" /></svg></span>
                  <div>
                    <div className="st"><h3>MRO &amp; repair stations</h3><span className="tag">Rotables · Consumables</span></div>
                    <p>Consumables, rotables and hard-to-find spares kept moving through the shop with documented sourcing on every line.</p>
                  </div>
                </article>
                <article className="serve-row">
                  <span className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z" /></svg></span>
                  <div>
                    <div className="st"><h3>Defense &amp; government</h3><span className="tag">NSN · CAGE · FAR/DFARS</span></div>
                    <p>NSN, CAGE and NIIN-indexed procurement with full compliance flow-down — supporting the USA and her allies.</p>
                  </div>
                </article>
                <article className="serve-row">
                  <span className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /><circle cx="12" cy="12" r="10" /></svg></span>
                  <div>
                    <div className="st"><h3>Business &amp; general aviation</h3><span className="tag">NBAA member</span></div>
                    <p>Parts and AOG support for business jets and GA fleets, backed by NBAA membership and 24/7 coverage.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ======================== LEADERSHIP ======================== */}
        <section className="section leaders" id="leadership">
          <div className="container">
            <div className="leaders-top reveal">
              <div className="section-head">
                <span className="kicker">Leadership</span>
                <h2>The people who own the clock.</h2>
                <p>A flat, operations-heavy team. Every leader here still touches live RFQs — because the 15-minute bar is set at the top, not delegated away from it.</p>
              </div>
              <a className="btn btn--ghost" href="/contact">Talk to our team →</a>
            </div>

            <div className="leader-grid stagger">
              <article className="leader">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=560&fit=crop&crop=faces" alt="Marcus Reyes" loading="lazy" />
                  <span>MR</span>
                </div>
                <div className="body">
                  <div className="name">Marcus Reyes</div>
                  <div className="role">Chief Executive Officer</div>
                  <p className="bio">Founded ASAP's aerospace division after 15 years in flight-line procurement. Still reads the AOG channel first thing every morning.</p>
                  <span className="tag">Est. 2009</span>
                </div>
              </article>
              <article className="leader">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=560&fit=crop&crop=faces" alt="Dana Kellerman" loading="lazy" />
                  <span>DK</span>
                </div>
                <div className="body">
                  <div className="name">Dana Kellerman</div>
                  <div className="role">VP, Procurement</div>
                  <p className="bio">Owns the account-manager model and supplier network across 5,100+ manufacturers. Set the 15-minute response SLA.</p>
                  <span className="tag">Supply chain</span>
                </div>
              </article>
              <article className="leader">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&h=560&fit=crop&crop=faces" alt="Priya Nadar" loading="lazy" />
                  <span>PN</span>
                </div>
                <div className="body">
                  <div className="name">Priya Nadar</div>
                  <div className="role">Director, Quality Assurance</div>
                  <p className="bio">Runs the AS9120 &amp; ISO 9001 quality system and every surveillance audit. Traceability on every line is her line in the sand.</p>
                  <span className="tag">AS9120 lead</span>
                </div>
              </article>
              <article className="leader">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=560&fit=crop&crop=faces" alt="Theo Okafor" loading="lazy" />
                  <span>TO</span>
                </div>
                <div className="body">
                  <div className="name">Theo Okafor</div>
                  <div className="role">Head of AOG &amp; Logistics</div>
                  <p className="bio">Coordinates hand-carry, expedite and dedicated freight for grounded aircraft. On call when downtime is measured in dollars per minute.</p>
                  <span className="tag">24/7 desk</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ====================== CERTIFICATIONS ====================== */}
        <section className="section certs-sec" id="certifications">
          <div className="container">
            <div className="section-head reveal">
              <span className="kicker">Quality, accreditation &amp; memberships</span>
              <h2>Audited, accredited, independent.</h2>
              <p>Registered to the standards that flight-line and defense buyers actually require — and a member of the industry bodies that keep us accountable. Paperwork to prove every line.</p>
              <div className="accred-strip">
                <span className="std-chip"><b>AS9120:2015</b> Aerospace QMS</span>
                <span className="std-chip"><b>ISO 9001:2015</b> Quality system</span>
                <span className="std-chip"><b>CAGE</b> 6RE77</span>
              </div>
            </div>

            <div className="logo-wall stagger">
              <figure className="logo-tile">
                <span className="logo-frame">
                  <img src="/logos/asa-member.svg" alt="ASA Member — Aviation Suppliers Association"
                       loading="lazy" />
                  <span className="pending"><span className="pb-mark">ASA</span><span className="pb-sub">Aviation Suppliers Association</span></span>
                </span>
                <figcaption className="cap">ASA Member</figcaption>
              </figure>

              <figure className="logo-tile">
                <span className="logo-frame">
                  <img src="/logos/faa-certified.svg" alt="FAA AC-0056B Certified Company"
                       loading="lazy" />
                  <span className="pending"><span className="pb-mark">FAA</span><span className="pb-sub">AC-0056B Certified Company</span></span>
                </span>
                <figcaption className="cap">FAA AC-0056B Certified</figcaption>
              </figure>

              <figure className="logo-tile">
                <span className="logo-frame">
                  <img src="/logos/inc-500.svg" alt="Inc. 500 — America's Fastest-Growing Private Companies"
                       loading="lazy" />
                  <span className="pending"><span className="pb-mark">Inc.500</span><span className="pb-sub">Fastest-Growing Private Cos.</span></span>
                </span>
                <figcaption className="cap">Inc. 500 Honoree</figcaption>
              </figure>

              <figure className="logo-tile">
                <span className="logo-frame">
                  <img src="/logos/dla-cage.svg" alt="Defense Logistics Agency — CAGE Code 6RE77"
                       loading="lazy" />
                  <span className="pending"><span className="pb-mark">DLA</span><span className="pb-sub">Defense Logistics · CAGE 6RE77</span></span>
                </span>
                <figcaption className="cap">DLA · CAGE 6RE77</figcaption>
              </figure>

              <figure className="logo-tile">
                <span className="logo-frame">
                  <img src="/logos/nbaa-member.svg" alt="Member of NBAA — National Business Aviation Association"
                       loading="lazy" />
                  <span className="pending"><span className="pb-mark">NBAA</span><span className="pb-sub">National Business Aviation Assn.</span></span>
                </span>
                <figcaption className="cap">Member of NBAA</figcaption>
              </figure>
            </div>

            <div className="cert-note">
              <p><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z" /></svg> Audit reports and surveillance evidence available to customers under NDA.</p>
              <p><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" /></svg> Lot-trace and certificate-of-conformance documents on every line, by default.</p>
            </div>
          </div>
        </section>

        {/* =========================== CTA =========================== */}
        <section className="section--tight cta">
          <div className="container">
            <div>
              <h2>Work with an independent you can audit.</h2>
              <p>Whether you're sourcing one obsolete connector or standing up a full program supply chain, a named ASAP account manager is ready to talk.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn--solid btn--lg" href="/contact">Contact the team</a>
              <a className="btn btn--ghost btn--lg" href="/catalogue">Explore the catalogue</a>
            </div>
          </div>
        </section>

      </main>

      {/* =========================== FOOTER =========================== */}
      <footer className="site-footer">
        <div className="container-wide">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="brand" href="/" aria-label="ASAP home">
                <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <rect width="40" height="40" rx="8" fill="oklch(58% .18 255)" />
                  <path d="M8 26 L20 8 L32 26 L20 20 Z" fill="#fff" />
                  <path d="M12 30 L20 24 L28 30 Z" fill="#fff" fillOpacity=".6" />
                </svg>
                <span className="brand-text"><b>ASAP</b><small>Aerospace &amp; Defense</small></span>
              </a>
              <p>An independent aerospace and defense parts distributor. Proudly supporting the USA and her allies with a 15-minute quote SLA, 24/7.</p>
              <div className="footer-stats">
                <span><b>2B</b> part numbers</span><span><b>5,100+</b> manufacturers</span><span><b>100M</b> parts sold</span><span><b>60K</b> customers</span>
              </div>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About ASAP</a></li>
                <li><a href="/capabilities">Capabilities</a></li>
                <li><a href="/quality">Quality Assurance</a></li>
                <li><a href="/traceability">Traceability Standards</a></li>
                <li><a href="/blog">Blog &amp; Insights</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Catalog</h4>
              <ul>
                <li><a href="/catalogue">Browse Catalogue</a></li>
                <li><a href="/manufacturers">Manufacturers</a></li>
                <li><a href="/nsn">NSN Parts</a></li>
                <li><a href="/cage">CAGE Codes</a></li>
                <li><a href="/niin">NIIN Index</a></li>
                <li><a href="/fsc">Federal Supply Classes</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>RFQ &amp; Service</h4>
              <ul>
                <li><a href="/rfq">Submit RFQ</a></li>
                <li><a href="/rfq/cart">RFQ Cart</a></li>
                <li><a href="/bom">Upload BOM</a></li>
                <li><a href="/aog">AOG Support</a></li>
                <li><a href="/account-managers">Account Managers</a></li>
                <li><a href="/lead-time">Lead Time Tracker</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="/terms-customer">Customer Terms</a></li>
                <li><a href="/terms-supplier">Supplier Terms</a></li>
                <li><a href="/far-dfars">FAR &amp; DFARS Flow Downs</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
                <li><a href="/legal">Legal Notice</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-contact">
              <span><b>HQ</b>1341 South Sunkist Street, Anaheim CA 92806</span>
              <span><b>RFQ Phone</b><a href="tel:+17147054780" className="mono">+1 (714) 705-4780</a></span>
              <span><b>Procurement</b><a href="mailto:sales@asap-aerospace.com">sales@asap-aerospace.com</a></span>
              <span><b>Payment</b>
                <span className="pay"><span className="card">VISA</span><span className="card">DISC</span><span className="card">AMEX</span></span>
              </span>
            </div>
          </div>
          <div className="footer-bottom" style={{ borderTop: '0', paddingTop: '0' }}>
            <div className="copy">© 2026 ASAP Aerospace &amp; Defense · CAGE 0HVD9 · An independent distributor</div>
            <a className="mono" style={{ fontSize: '.76rem', color: 'var(--ink-400)' }} href="/feedback">Submit feedback →</a>
          </div>
        </div>
      </footer>



      <PageScripts />
    </>
  );
}

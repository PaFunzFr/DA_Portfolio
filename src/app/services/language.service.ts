import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage = signal<string>(''); // set signal

  translation: { [key: string]: any } = {
    en: {
      landingPage: {
        welcome: 'PATRICK FREY',
        title: `with an architectural Background (M.Sc)`,
        scroll: 'scroll down',
      },
      hero: {
        welcome: 'WELCOME',
        designer: 'my background as architect ensures great design',
        developer: 'with passion for clean, elegant and efficient code',
      },
      about: {
        title: 'About me',
        text: `My passion for IT has been with me since my youth. After several years of digitizing complex construction projects,
              I realized that my true passion lies not in architecture but in software development.<br><br>
              Now, I am consciously and enthusiastically taking a new path as a web developer.
              I am excited about combining modern frontend technologies like Angular with user-centered design.
              My experience with complex structures, well-thought-out concepts, and clear design language allows me to create intuitive,
              clean, and high-performance applications.`,
      },
      skills: {
        title: "Didn't find the right skill?",
        text: `As a fullstack developer with a design background, I combine analytical thinking with visual intuition.
              I build systems that not only work — but feel right.
              My goal is to connect technology and design to create digital experiences with character.`,
        mindset: `No problem - I enjoy learning new things.<br>Just <a class="contact-ref" href="#aContact">reach out</a> to me!`,
      },
      projects: {
        title: 'My Projects',
        descriptions: {
          join: `A project management tool developed with HTML, CSS, JavaScript, Git,
                  and Firebase to visualize the status and responsibilities of tasks.`,
          pokedex: `A Pokedex to retrieve and display Pokémon data such as types
                    and abilities using the Poke API. The use of ChartJS enabled the 
                    analysis of specific API endpoints in dashboards.`,
          portfolio: `My portfolio page. A summary of who I am and my skills.
                      The project was built using Angular.`,
          dabubble: `This project involved developing a business chat client,
                    providing a platform for professional communication. Users can exchange messages,
                    create channels, and share files.`,
          bnbsaga: `This project involved creating a Jump-and-Run game where object-oriented
                    programming was applied to implement the game logic. Classes and objects
                    were used to structure the gameplay and control interactive elements.`,
        },
      },
      team: {
        title: 'Need a teamplayer?',
        testimonials: {
          member1: `Patrick impressed me with his diplomatic skills. With kindness and humor, he brought the team together and fostered a positive atmosphere. 
                    His quick grasp and solid knowledge of Angular and Firebase were extremely valuable. Thanks to his planning talent and big-picture thinking, we always stayed on track. 
                    Working with Patrick was a real pleasure – thank you!`,
          member2: `Patrick stood out for his proactive mindset and sense of responsibility. He contributed across development, planning, and testing, always open to feedback and growth. 
                    Working with him was defined by honesty, focus, and mutual respect. He’s not just a skilled developer, but a co-creator who embodies responsibility and quality.`,
          member3: `Patrick was a key team member who led planning and Firebase integration with structure and clarity. His supportive nature, team awareness, and patient explanations made collaboration smooth and inclusive. 
                    Technically strong and personally engaging – working with him was a real pleasure.`,
          member4: `Patrick consistently enriched the team by asking the right questions and exploring solutions independently, which greatly deepened his and our understanding. 
                    He always had a strong overview of the bigger picture and was a valuable asset in group discussions. His own design ideas were not only creative but also executed with impressive precision and quality.`,
        },
      },
      contact: {
        title: 'Let´s get in touch',
        text: `Interested in working with me? If you think I could be a good fit for your company or project, 
        let me know! If I don't have all the tools you're looking for yet, don't hesitate to reach out. I'm eager to 
        learn new technologies and put them into action successfully!`,
        sent: `Message was sent.`,
      },
      privacyPolicy: {
        read: ["I've read the ", 'privacy policy', ' and agree to the processing of my data as outlined.' ],
        html: `
          <h3 class="policies-title">Privacy Policy</h3>
          <h5>1. Data Protection at a Glance</h5>
          <h5>General Information</h5>
          <p>The following information provides a simple overview of what happens to your personal data when you visit this website. 
              Personal data includes all data that can personally identify you. 
              Detailed information on data protection can be found in our privacy policy listed below this text.</p>
          <h5>Data Collection on This Website</h5>
          <h4>Who is responsible for data collection on this website?</h4>
          <p>Data processing on this website is carried out by the website operator. 
              You can find the operator's contact details in the section "Information on the Responsible Party" in this privacy policy.</p>
          <h4>How do we collect your data?</h4>
          <p>Your data is collected in two ways. Firstly, by you providing it to us, for example, by entering information into a contact form.</p>
          <p>Other data is automatically collected or obtained with your consent when you visit the website through our IT systems. 
              This primarily includes technical data (e.g., internet browser, operating system, or the time the page was accessed). 
              The collection of this data occurs automatically as soon as you enter this website.</p>
          <h4>What do we use your data for?</h4>
          <p>Some data is collected to ensure the website functions correctly. Other data may be used to analyze your user behavior. 
              If contracts can be concluded or initiated via the website, the data provided will also be processed for contract offers, orders, or other requests.</p>
          <h4>What rights do you have regarding your data?</h4>
          <p>You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time, free of charge. 
              You also have the right to request the correction or deletion of this data. 
              If you have given consent for data processing, you can revoke this consent at any time for the future. 
              Additionally, you have the right to request the restriction of the processing of your personal data under certain circumstances. 
              Furthermore, you have the right to file a complaint with the competent supervisory authority.</p>
          <p>You can contact us at any time regarding this or any other questions about data protection.</p>
                  <p>You can contact us at any time regarding this or any other questions about data protection.</p>
          <h2>2. Hosting</h2>
          <p>We host the content of our website with the following provider: https://www.strato.de</p>
          <h5>External Hosting</h5>
          <p>This website is hosted externally. The personal data collected on this website is stored on the servers of the hosting provider(s). 
            This may include, in particular, IP addresses, contact requests, metadata and communication data, contract data, contact details, 
            names, website accesses, and other data generated through a website.</p>
            <p>External hosting is carried out for the purpose of fulfilling our contractual obligations towards potential and existing customers 
            (Article 6(1)(b) GDPR) and in the interest of secure, fast, and efficient provision of our online offering by a professional provider 
            (Article 6(1)(f) GDPR). If consent has been requested, processing takes place exclusively on the basis of Article 6(1)(a) GDPR and 
            Article 25(1) TDDDG, insofar as the consent includes the storage of cookies or access to information on the user's device 
            (e.g., device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time.
          </p>
          <p>Our hosting provider(s) will only process your data to the extent necessary to fulfill its service obligations and will follow our 
          instructions regarding this data.</p>
          <p>We use the following hosting provider(s):</p>
          <p>https://www.strato.de</p>
          <h2>3. General Information and Mandatory Notices</h2>
          <h5>Data Protection</h5>
          <p>The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially 
            and in accordance with legal data protection regulations and this privacy policy.</p>
            <p>When you use this website, various personal data is collected. Personal data refers to data that can personally identify you. 
            This privacy policy explains what data we collect and how we use it. It also explains how and for what purpose this happens.</p>
          <p>Please note that data transmission over the Internet (e.g., when communicating via email) may have security vulnerabilities. 
            Complete protection of data against access by third parties is not possible.</p>
          <h5>Notice Regarding the Responsible Party</h5>
          <p>The responsible party for data processing on this website is:</p>
          <p>Patrick Frey<br />
          Burgallee 9<br />
          61231 Bad Nauheim</p>
          <p>Phone: 01731500778<br />
          Email: contact@p-frey.com</p>
                  <p>The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of 
          processing personal data (e.g., names, email addresses, etc.).</p>

          <h5>Storage Duration</h5>
          <p>Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us 
            until the purpose for the data processing no longer applies. If you make a legitimate request for deletion or revoke your 
            consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your 
            personal data (e.g., tax or commercial law retention periods). In the latter case, the deletion will take place once these 
            reasons no longer apply.</p>

          <h5>General Information on the Legal Basis for Data Processing on This Website</h5>
          <p>If you have given your consent to data processing, we process your personal data on the basis of Article 6(1)(a) GDPR or, 
          if special categories of data pursuant to Article 9(1) GDPR are processed, on the basis of Article 9(2)(a) GDPR. In the case 
          of explicit consent to the transfer of personal data to third countries, data processing is also carried out on the basis 
          of Article 49(1)(a) GDPR. If you have consented to the storage of cookies or to access information on your device 
          (e.g., via device fingerprinting), data processing is additionally based on Section 25(1) TDDDG. Consent can be revoked 
          at any time. If your data is necessary for the fulfillment of a contract or for pre-contractual measures, we process 
          your data on the basis of Article 6(1)(b) GDPR. Furthermore, we process your data if this is necessary for compliance 
          with a legal obligation under Article 6(1)(c) GDPR. Data processing may also be based on our legitimate interest 
          pursuant to Article 6(1)(f) GDPR. The specific legal basis applicable in each individual case is provided in the 
          following sections of this privacy policy.</p>

          <h5>Recipients of Personal Data</h5>
          <p>As part of our business activities, we collaborate with various external parties. This sometimes requires the transfer of 
          personal data to these external parties. We only share personal data with external parties if it is necessary for the 
          fulfillment of a contract, if we are legally required to do so (e.g., disclosure of data to tax authorities), if we have a 
          legitimate interest in sharing the data pursuant to Article 6(1)(f) GDPR, or if another legal basis permits the transfer of 
          data. When using data processors, we only transfer personal data of our customers based on a valid data processing agreement. 
          In the case of joint processing, a joint processing agreement is concluded.</p>

          <h5>Revocation of Your Consent to Data Processing</h5>
          <p>Many data processing operations are only possible with your explicit consent. You may revoke any consent you have already 
          given at any time. The legality of the data processing carried out before the revocation remains unaffected by the revocation.</p>

          <h5>Right to Object to Data Processing in Specific Cases and to Direct Advertising (Article 21 GDPR)</h5>
          <p>
          IF DATA PROCESSING IS BASED ON ARTICLE 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME, 
          ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION, TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO 
          APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS FOR PROCESSING CAN BE FOUND 
          IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS 
          WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, 
          AND FREEDOMS, OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE, OR DEFENSE OF LEGAL CLAIMS 
          (OBJECTION PURSUANT TO ARTICLE 21(1) GDPR).
          </p>
          <p>
          IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT ADVERTISING PURPOSES, YOU HAVE THE RIGHT TO OBJECT 
          AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH ADVERTISING; THIS ALSO APPLIES TO 
          PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL 
          DATA WILL NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO ARTICLE 21(2) GDPR).
          </p>

          <h5>Right to Lodge a Complaint with the Competent Supervisory Authority</h5>
          <p>
          In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, 
          in particular in the Member State of their habitual residence, place of work, or the place of the alleged violation. 
          The right to lodge a complaint exists without prejudice to other administrative or judicial remedies.
          </p>

          <h5>Right to Data Portability</h5>
          <p>
          You have the right to have data that we process automatically based on your consent or in fulfillment of a contract 
          handed over to you or to a third party in a commonly used, machine-readable format. If you request the direct transfer 
          of the data to another controller, this will only be done to the extent that it is technically feasible.
          </p>

          <h5>Right to Access, Rectification, and Erasure</h5>
          <p>
          Within the framework of the applicable legal provisions, you have the right at any time to obtain free information about 
          your stored personal data, its origin and recipients, and the purpose of data processing, as well as, if applicable, a 
          right to rectify or delete this data. For this purpose, and for further questions on the topic of personal data, you can 
          contact us at any time.
          </p>

          <h5>Right to Restriction of Processing</h5>
          <p>
          You have the right to request the restriction of the processing of your personal data. To do so, you can contact us at any time. 
          The right to restriction of processing applies in the following cases:
          </p>
          <ul>
          <li>If you contest the accuracy of your personal data stored by us, we generally need time to verify this. For the duration 
          of the verification, you have the right to request the restriction of the processing of your personal data.</li>
          <li>If the processing of your personal data was/is unlawful, you may request the restriction of data processing instead of erasure.</li>
          <li>If we no longer need your personal data, but you require it for the exercise, defense, or establishment of legal claims, 
          you have the right to request the restriction of the processing of your personal data instead of its deletion.</li>
          <li>If you have objected pursuant to Article 21(1) GDPR, a balance must be struck between your interests and ours. 
          As long as it has not been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
          </ul>
          <p>
          If you have restricted the processing of your personal data, such data may—apart from being stored—only be processed with 
          your consent or for the establishment, exercise, or defense of legal claims or for the protection of the rights of another 
          natural or legal person or for reasons of important public interest of the European Union or a Member State.
          </p>

          <h2>4. Data Collection on This Website</h2>

          <h5>Cookies</h5>
          <p>Our websites use so-called cookies. Cookies are small data packages 
          and do not cause any harm to your device. They are either temporarily 
          stored for the duration of a session (session cookies) or permanently 
          (persistent cookies) on your device. Session cookies are automatically 
          deleted after the end of your visit. Persistent cookies remain on your 
          device until you delete them yourself or an automatic deletion occurs 
          through your web browser.</p>

          <p>Cookies can come from us (first-party cookies) or third-party 
          companies (so-called third-party cookies). Third-party cookies enable 
          the integration of certain third-party services within websites (e.g., 
          cookies for processing payment services).</p>

          <p>Cookies serve various purposes. Many cookies are technically necessary 
          because certain website functions would not work without them (e.g., 
          the shopping cart function or displaying videos). Other cookies may be 
          used to evaluate user behavior or for advertising purposes.</p>

          <p>Cookies that are necessary for the electronic communication process, 
          to provide certain features you request (e.g., the shopping cart function), 
          or to optimize the website (e.g., cookies to measure web audience) are 
          stored based on Article 6(1)(f) GDPR, unless another legal basis is provided. 
          The website operator has a legitimate interest in storing necessary cookies 
          to ensure the technically error-free and optimized provision of services. 
          If consent is requested for the storage of cookies and similar recognition 
          technologies, processing is based solely on that consent (Article 6(1)(a) 
          GDPR and Article 25(1) TTDSG); consent can be revoked at any time.</p>

          <p>You can configure your browser to be informed about the setting of 
          cookies and allow cookies only on a case-by-case basis, exclude the 
          acceptance of cookies for certain cases or in general, and enable the 
          automatic deletion of cookies when closing the browser. Disabling cookies 
          may limit the functionality of this website.</p>

          <p>Which cookies and services are used on this website can be found in 
          this privacy policy.</p>

          <h5>Contact Form</h5>
          <p>If you send us inquiries via the contact form, the information you 
          provide in the inquiry form, including the contact details you provide 
          there, will be stored by us for the purpose of processing the inquiry 
          and in case of follow-up questions. We will not share this data without 
          your consent.</p>

          <p>The processing of this data is based on Article 6(1)(b) GDPR, provided 
          your inquiry is related to the fulfillment of a contract or necessary for 
          taking pre-contractual steps. In all other cases, processing is based 
          on our legitimate interest in effectively processing the inquiries 
          addressed to us (Article 6(1)(f) GDPR) or on your consent (Article 6(1)(a) 
          GDPR), if requested; consent can be revoked at any time.</p>

          <p>The data you enter in the contact form will remain with us until you 
          request its deletion, withdraw your consent to storage, or the purpose 
          for storing the data no longer applies (e.g., after the processing of 
          your inquiry is completed). Mandatory legal provisions – especially 
          retention periods – remain unaffected.</p>

          <p>Source: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
        `,
      },
      imprint: {
        title: 'Imprint',
        contact: 'Contact'
      }
    },
    de: {
      landingPage: {
        welcome: 'PATRICK FREY',
        title: `mit Hintergrund als Architekt (M.Sc.)`,
        scroll: 'scroll down',
      },
      hero: {
        welcome: 'Willkommen',
        designer: 'Mein Architektur-Hintergrund sorgt für großartiges Design',
        developer:
          'Mit Leidenschaft für sauberen, eleganten und effizienten Code',
      },
      about: {
        title: 'Über mich',
        text: `Meine Begeisterung für IT begleitet mich seit meiner Jugend. Nach mehreren Jahren in der Digitalisierung komplexer Bauprojekte habe ich erkannt,
            dass meine Leidenschaft nicht in der Architektur, sondern in der Softwareentwicklung liegt.
            Jetzt schlage ich bewusst und motiviert einen neuen Weg als Web-Entwickler ein.
            Moderne Frontend-Technologien wie Angular mit nutzerzentriertem Design zu verbinden, begeistert mich.
            Meine Erfahrung mit komplexen Zusammenhängen, durchdachten Konzepten und klarer Designsprache setze ich gezielt ein,
            um intuitive, saubere und leistungsstarke Anwendungen zu entwickeln.`,
      },
      skills: {
        title: 'Passenden Skill nicht gefunden?',
        text: `Als Fullstack Developer mit Design-Background kombiniere ich analytisches Denken mit visueller Intuition.
              Ich entwickle Systeme, die nicht nur funktionieren, sondern sich richtig anfühlen. 
              Mein Ziel ist es, Technologie und Design zu verbinden, um digitale Erlebnisse mit Charakter zu schaffen.`,
        mindset: `Kein Problem - Ich lerne gerne Neues. Sprich mich einfach darauf an!`,
      },
      projects: {
        title: 'Meine Projekte',
        descriptions: {
          join: `Ein Projektmanagement-Tool, das mit HTML, CSS, JavaScript, Git und Firebase entwickelt
                wurde,um den Status und die Verantwortlichkeiten von Aufgaben zu visualisieren.`,
          pokedex: `Ein Pokedex, um Pokémon-Daten wie Typen oder Fähigkeiten über die Poke-API abzurufen und anzuzeigen.
                  Die Verwendung von ChartJS ermöglichte die Auswertung bestimmter API-Endpunkte in Dashboards.`,
          portfolio: `Meine Portfolio Seite. Eine Zusammenfassung meiner Person und Fähigkeiten.
                    Das Projekt wurde in Angular erstellt.`,
          dabubble: `In diesem Projekt wurde ein Business-Chat-Client entwickelt, der eine Plattform für geschäftliche
                    Kommunikation bietet. Nutzer können Nachrichten austauschen,
                    Kanäle erstellen und Dateien teilen.`,
          bnbsaga: `In diesem Projekt wurde ein Jump-and-Run-Spiel entwickelt, bei dem die Spiellogik mit
                  objektorientierter Programmierung umgesetzt wurde.
                  Klassen und Objekte wurden genutzt, um die Spielmechanik zu
                  strukturieren und interaktive Elemente zu steuern.`,
        },
      },
      team: {
        title: 'Teamplayer gesucht?',
        testimonials: {
          member1: `Patrick beeindruckte mit diplomatischem Geschick, brachte das Team mit Freundlichkeit und Humor zusammen und schuf ein positives Miteinander. 
                    Sein schnelles Auffassungsvermögen und fundiertes Wissen in Angular und Firebase waren ebenso wertvoll wie sein Planungstalent und der Blick fürs große Ganze. Die Zusammenarbeit mit ihm war eine echte Freude – danke!`,
          member2: `Patrick überzeugte mit seiner proaktiven Art, seinem Verantwortungsbewusstsein und seinem Blick fürs Ganze. Er brachte sich in Entwicklung, Planung und Testing ein und war stets offen für Feedback. 
                    Die Zusammenarbeit mit ihm war geprägt von Vertrauen, Fokus und gegenseitigem Respekt – er stand für Qualität, fachlich wie menschlich.`,
          member3: `Patrick war eine zentrale Stütze im Team, er übernahm Planung und Firebase-Integration mit Überblick und Struktur. 
                    Besonders schätzte ich seine hilfsbereite Art und sein Gespür fürs Team. Er erklärte geduldig, bezog alle ein und sorgte dafür, dass niemand auf der Strecke blieb. 
                    Fachlich stark, menschlich verbindend, mit ihm zu arbeiten war einfach rundum angenehm.`,
          member4: `Patrick hat das Team kontinuierlich bereichert, indem er die richtigen Fragen stellte und eigenständig Lösungen erarbeitete – 
                    was sein eigenes wie auch unser Verständnis deutlich vertiefte. Er behielt stets das große Ganze im Blick und war eine wertvolle Stimme in Gruppendiskussionen. 
                    Seine eigenen Designideen waren nicht nur kreativ, sondern auch mit beeindruckender Präzision und Qualität umgesetzt.`,
        },
      },
      contact: {
        title: 'Interessiert?',
        text: `Interessiert an einer Zusammenarbeit? Wenn du der Meinung bist, dass ich gut in dein Unternehmen oder Projekt passe, 
              freue ich mich, von dir zu hören! Sollten noch nicht alle gewünschten Kenntnisse vorhanden sein, ist das kein Problem – ich bin sehr motiviert, 
              neue Technologien zu erlernen und erfolgreich in die Praxis umzusetzen.`,
        sent: `Nachricht wurde versendet.`,
      },
      privacyPolicy: {
        read: ['Ich habe die ', 'Datenschutzerklärung', ' gelesen und stimme der Verarbeitung meiner Daten gemäß den dort aufgeführten Bestimmungen zu.' ],
        html: `
              <h3 class="policies-title">Datenschutzerklärung</h3>
              <h5>1. Datenschutz auf einen Blick</h5>
              <h5>Allgemeine Hinweise</h5>
              <p>Die folgenden Hinweise geben einen einfachen überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
                  können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                  Datenschutzerklärung.</p>
              <h5>Datenerfassung auf dieser Website</h5>
              <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                  Abschnitt Hinweis zur Verantwortlichen Stelle in dieser Datenschutzerklärung entnehmen.</p>
              <h4>Wie erfassen wir Ihre Daten?</h4>
              <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten
                  handeln, die Sie in ein Kontaktformular eingeben.</p>
              <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                  Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                  Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              <h4>Wofür nutzen wir Ihre Daten?</h4>
              <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können
                  zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt
                  werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
                  verarbeitet.</p>
              <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
                  für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                  Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
                  zuständigen Aufsichtsbehörde zu.</p>
              <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
              <h2>2. Hosting</h2>
              <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter: https://www.strato.de</p>
              <h5>Externes Hosting</h5>
              <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf
                  den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta-
                  und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
                  Website generiert werden, handeln.</p>
              <p>Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden
                  (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres
                  Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
                  Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
                  und 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                  Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
                  widerrufbar.</p>
              <p>Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
                  Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
              <p>Wir setzen folgende(n) Hoster ein:</p>
              <p>https://www.strato.de</p>
              <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
              <h5>Datenschutz</h5>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.</p>
              <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
                  Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche
                  Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
              <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              <h5>Hinweis zur verantwortlichen Stelle</h5>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>Patrick Frey<br />
                  Burgallee 9<br />
                  61231 Bad Nauheim</p>
              
              <p>Telefon: 01731500778<br />
                  E-Mail: contact@p-frey.com</p>
              <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
                  Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. ä.) entscheidet.</p>
              
              <h5>Speicherdauer</h5>
              <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
                  personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                  Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                  sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B.
                  steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                  dieser Gründe.</p>
              <h5>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h5>
              <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
                  von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1
                  DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die übertragung personenbezogener Daten in
                  Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
                  Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.B. via Device-Fingerprinting)
                  eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von 25 Abs. 1 TDDDG. Die Einwilligung ist
                  jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir
                  Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6
                  Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6
                  Abs. 1 lit. f DSGVO erfolgen. über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                  Absätzen dieser Datenschutzerklärung informiert.</p>
              <h5>Empfänger von personenbezogenen Daten</h5>
              <p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise
                  auch eine übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben
                  personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich
                  ist, wenn wir gesetzlich hierzu verpflichtet sind (z.B. Weitergabe von Daten an Steuerbehörden), wenn wir ein
                  berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
                  Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten
                  unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer
                  gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>
              <h5>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h5>
              <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
                  erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
                  bleibt vom Widerruf unberührt.</p>
              <h5>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h5>
              <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
                  RECHT, AUS GRüNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN
                  DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FüR EIN AUF DIESE BESTIMMUNGEN GESTüTZTES PROFILING. DIE JEWEILIGE
                  RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLäRUNG. WENN SIE WIDERSPRUCH
                  EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KöNNEN
                  ZWINGENDE SCHUTZWüRDIGE GRüNDE FüR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
                  üBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSüBUNG ODER VERTEIDIGUNG VON RECHTSANSPRüCHEN
                  (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
              <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                  WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                  EINZULEGEN; DIES GILT AUCH FüR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                  WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
                  (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
              <h5>Beschwerde&shy;recht bei der zuständigen Aufsichts&shy;behörde</h5>
              <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
                  insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                  mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                  gerichtlicher Rechtsbehelfe.</p>
              <h5>Recht auf Daten&shy;übertrag&shy;barkeit</h5>
              <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert
                  verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern
                  Sie die direkte übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
                  technisch machbar ist.</p>
              <h5>Auskunft, Berichtigung und Löschung</h5>
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                  gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                  Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
                  können Sie sich jederzeit an uns wenden.</p>
              <h5>Recht auf Einschränkung der Verarbeitung</h5>
              <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie
                  sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
              <ul>
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der
                      Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der
                      Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                      Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und
                      unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das
                      Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              </ul>
              <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten - von ihrer
                  Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
                  eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
              <h2>4. Datenerfassung auf dieser Website</h2>
              <h5>Cookies</h5>
              <p>Unsere Internetseiten verwenden so genannte Cookies. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät
                  keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
                  (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
                  gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine
                  automatische Löschung durch Ihren Webbrowser erfolgt.</p>
              <p>Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).
                  Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von
                  Webseiten (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
              <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen
                  ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies
                  können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p>
              <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
                  erwünschter Funktionen (z.B. für die Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur Messung
                  des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                  gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse
                  an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
                  Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
                  wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und 25
                  Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.</p>
              <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im
                  Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
                  Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
                  Funktionalität dieser Website eingeschränkt sein.</p>
              <p>Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
              </p>
              <h5>Kontaktformular</h5>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
                  von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                  Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
                  übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                  gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
                  diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
              <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                  Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener
                  Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben
                  unberührt.</p>
              <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
      `,
      },
      imprint: {
        title: 'Impressum',
        contact: 'Kontakt'
      }
    },
  };

  //used in html tags
  getTranslation(section: string, content: string): string {
    const language = this.currentLanguage(); // get signal
    return this.translation[language][section][content];
  }

  getTranslationArray(section: string, content: string, index:number): string {
    const language = this.currentLanguage(); // get signal
    return this.translation[language][section][content][index];
  }

  getProjectDescription(project: string): string {
    const language = this.currentLanguage();
    return this.translation[language].projects.descriptions[project];
  }

  getProjectTestimonial(name: string): string {
    const language = this.currentLanguage();
    return this.translation[language].team.testimonials[name];
  }

  toggleLanguage(newLanguage: string): void {
    //const newLanguage = this.currentLanguage() === 'en' ? 'de' : 'en';
    this.currentLanguage.set(newLanguage); // set new signal
  }
}

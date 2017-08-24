<script type="text/javascript">
  getOrgChart.themes.myTheme =
  {
    size: [330, 260],
    toolbarHeight: 46,
    textPoints: [
      { x: 20, y: 45, width: 300 },
      { x: 120, y: 100, width: 200 },
      { x: 120, y: 125, width: 200 }
    ],
    //textPointsNoImage: [] NOT IMPLEMENTED,
    box: '<rect x="0" y="0" height="260" width="330" rx="10" ry="10" class="get-box"></rect>'
        + '<g transform="matrix(1,0,0,1,120,140)"><rect x="0" y="0" height="20" width="50" rx="3" ry="3" class="more-info"></rect><text width="40" class="get-text get-text-3" x="23" y="17">##</text></g>'
        + '<g transform="matrix(0.25,0,0,0.25,123,142)"><path d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951  c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319  c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056  v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309  c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043  C53,47.519,51.089,44.427,48.014,42.889z M51,54c0,1.357-7.412,4-21,4S9,55.357,9,54v-3.238c0-2.571,1.402-4.934,3.659-6.164  l8.921-4.866C23.073,38.917,24,37.354,24,35.655v-4.019l-0.233-0.278c-0.024-0.029-2.475-2.994-3.41-7.065l-0.091-0.396l-0.341-0.22  C19.346,23.303,19,22.676,19,22v-4c0-0.561,0.238-1.084,0.67-1.475L20,16.228V10l-0.009-0.131c-0.003-0.027-0.343-2.799,1.605-5.021  C23.253,2.958,26.081,2,30,2c3.905,0,6.727,0.951,8.386,2.828c1.947,2.201,1.625,5.017,1.623,5.041L40,16.228l0.33,0.298  C40.762,16.916,41,17.439,41,18v4c0,0.873-0.572,1.637-1.422,1.899l-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713  c-0.297,0.421-0.586,0.794-0.837,1.079L35,31.623v4.125c0,1.77,0.983,3.361,2.566,4.153l9.553,4.776  C49.513,45.874,51,48.28,51,50.957V54z" fill="#FFFFFF"/></g>'
        + '<g transform="matrix(1,0,0,1,20,190)" class="btn" data-action="edit"><path d="M5 0 L97 0 Q97 0 97 0 L97 45 Q97 45 97 45 L5 45 Q0 45 0 40 L0 5 Q0 0 5 0 Z"></path><text x="35" y="27" width="60">Edit</text></g>'
        + '<g transform="matrix(1,0,0,1,117,190)" class="btn" data-action="add"><path d="M0 0 L97 0 Q97 0 97 0 L97 45 Q97 45 97 45 L0 45 Q0 45 0 45 L0 0 Q0 0 0 0 Z"></path><circle cx="49" cy="23" r="10"></circle><line x1="42" y1="23" x2="56" y2="23"></line><line x1="49" y1="16" x2="49" y2="30"></line></g>'
        + '<g transform="matrix(1,0,0,1,214,190)" class="btn" data-action="preview"><path d="M0 0 L92 0 Q97 0 97 5 L97 40 Q97 45 92 45 L0 45 Q0 45 0 45 L0 0 Q0 0 0 0 Z"></path><text x="25" y="27" width="60">Profile</text></g>',
    text: '<text width="[width]" class="get-text get-text-[index]" x="[x]" y="[y]">[text]</text>',
    image: '<clipPath id="clip"><circle cx="60" cy="120" r="40" /></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#clip)" xlink:href="[href]" x="20" y="80" height="80" width="80"/>',
    expandCollapseBtnRadius: 20
  };

  var orgChart = new getOrgChart(document.getElementById("people"), {
    theme: "myTheme",
    enableEdit: false,
    enableZoom: true,
    enableSearch: false,
    enableMove: true,
    enableGridView: false,
    enableDetailsView: false,
    enablePrint: true,
    primaryFields: ["Title", "Name", "Email", "Image"],
    updatedEvent: function () {
      init();
    },
    expandToLevel: 100,
    layout: getOrgChart.MIXED_HIERARCHY_RIGHT_LINKS,
    dataSource: [
      {
          "Id": 1,
          "parentId": 10,
          "Name": "Abegail Salo",
          "Title": "HR Technology Consultant",
          "Email": "abegail@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 2,
          "parentId": 54,
          "Name": "Alyssa Joan Dela Cruz",
          "Title": "Multimedia Services Specialist",
          "Email": "alyssa@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 3,
          "parentId": 65,
          "Name": "Angela Grace Garong",
          "Title": "UX Lead",
          "Email": "angela@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 4,
          "parentId": 54,
          "Name": "Angela Mae Elejido",
          "Title": "Marketing Officer",
          "Email": "angela@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 5,
          "parentId": 24,
          "Name": "Antonio V Manalo",
          "Title": "Senior Sales Manager",
          "Email": "antonio@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 6,
          "parentId": 11,
          "Name": "Argie Cañizares",
          "Title": "Junior Software Engineer Level 2",
          "Email": "argie@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 7,
          "parentId": 75,
          "Name": "Arianne Angeles",
          "Title": "OJT-HR",
          "Email": "arianne@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 8,
          "parentId": 39,
          "Name": "Bernadeth Asinas",
          "Title": "Payroll Master",
          "Email": "bernadeth@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 9,
          "parentId": 80,
          "Name": "Bernice Locsin",
          "Title": "Head of Customer Success",
          "Email": "bernice@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 10,
          "parentId": 80,
          "Name": "Butch Manalo",
          "Email": "butch@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 11,
          "parentId": 34,
          "Name": "Carlo James Lim",
          "Title": "Web Developer",
          "Email": "carlo@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 12,
          "parentId": 65,
          "Name": "Charles Kenrick Chua",
          "Title": "Agile Business Analyst",
          "Email": "charles@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 13,
          "parentId": 26,
          "Name": "Charlotte Jimenea",
          "Email": "charlotte@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 14,
          "parentId": 80,
          "Name": "Charmine Pelobello",
          "Title": "Professional Services - Account Manager",
          "Email": "charmine@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 15,
          "parentId": 34,
          "Name": "Christian Angelo Borja",
          "Title": "Senior Software Developer",

          "Email": "christian@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 16,
          "parentId": 9,
          "Name": "Christopher Torres",
          "Title": "Professional Services Officer",
          "Email": "christopher@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 17,
          "parentId": 40,
          "Name": "Cristopher Aquino",
          "Title": "IT Webdev Intern",
          "Email": "cristopher@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 18,
          "parentId": 10,
          "Name": "Danica Joy Alagon",
          "Title": "Field Sales Associate",
          "Email": "danica@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 19,
          "parentId": 10,
          "Name": "Daniel Andre Martin",
          "Title": "Senior Consultant-HR Technology",
          "Email": "daniel@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 20,
          "parentId": 10,
          "Name": "Daniel Luke Amper",
          "Title": "Field Sales Associate",
          "Email": "daniel@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 21,
          "parentId": 10,
          "Name": "Daryl Solis",
          "Title": "Sales Management Trainee",
          "Email": "daryl@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 22,
          "parentId": 91,
          "Name": "Dave Cheever",
          "Title": "Support Engineer",
          "Email": "dave@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 23,
          "parentId": 10,
          "Name": "Dennis Roy Zabal",
          "Title": "Sales Operations Supervisor",
          "Email": "dennis@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 24,
          "parentId": 80,
          "Name": "Diana Realiza Gonzalez",
          "Title": "Sales Director",
          "Email": "diana@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 25,
          "parentId": 34,
          "Name": "Diane Jane Litan",
          "Title": "Web Developer",
          "Email": "diane@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 26,
          "parentId": 80,
          "Name": "Dominico Roi De Castro",
          "Title": "Software Implementation Manager",
          "Email": "dominico@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 27,
          "parentId": 24,
          "Name": "Earl Warren Almonte",
          "Title": "Senior Consultant-HR Technology",
          "Email": "earl@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 28,
          "parentId": 80,
          "Name": "Erny Nazario",
          "Title": "Management Associate",
          "Email": "erny@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 29,
          "parentId": 12,
          "Name": "Franchesca Gail Lopez",
          "Title": "Professional Services Supervisor",
          "Email": "franchesca@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 30,
          "parentId": 10,
          "Name": "Geraldine Aligno",
          "Title": "Corporate Sales Associate",
          "Email": "geraldine@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 31,
          "parentId": 86,
          "Name": "Gladys Garcia",
          "Title": "Customer Advocate",
          "Email": "gladys@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 32,
          "parentId": 54,
          "Name": "Ima Ocon",
          "Title": "Copywriter",
          "Email": "ima@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 33,
          "parentId": 86,
          "Name": "Ivy Mariel de Ramos",
          "Title": "Customer Advocate",
          "Email": "ivy@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 34,
          "parentId": 80,
          "Name": "Jacinto Limjap Jr.",
          "Title": "Senior Software Architect",
          "Email": "jacinto@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 35,
          "parentId": 54,
          "Name": "Jane Catherine Villanueva",
          "Title": "Marketing Officer",
          "Email": "jane@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 36,
          "parentId": 34,
          "Name": "Jasper John Lepardo",
          "Title": "UI Designer and Front End Developer",
          "Email": "jasper@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 37,
          "parentId": 26,
          "Name": "Jayson De Leon",
          "Title": "Software Implementation Officer",
          "Email": "jayson@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 38,
          "parentId": 75,
          "Name": "Jed Patrick Go",
          "Title": "OJT-HR",
          "Email": "jed@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 39,
          "parentId": 80,
          "Name": "Jeffry Sumalde",
          "Title": "Account Manager/ Payroll Expert",
          "Email": "jeffry@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 40,
          "parentId": 34,
          "Name": "Jeinz Hernandez",
          "Title": "ASP.NET C# Developer",
          "Email": "jeinz@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 41,
          "parentId": 3,
          "Name": "Jena Marie Buenviaje",
          "Title": "Junior UX Generalist",
          "Email": "jena@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 42,
          "parentId": 80,
          "Name": "Jitka Contado",
          "Title": "Accountant",
          "Email": "jitka@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 43,
          "parentId": 40,
          "Name": "John Briggs Lonzame",
          "Title": "IT",
          "Email": "briggs@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 44,
          "parentId": 91,
          "Name": "John Kevin Tabaño",
          "Title": "Software Quality Assurance Tester",
          "Email": "kevin@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 45,
          "parentId": 86,
          "Name": "Jonalyn De Leon",
          "Title": "Customer Advocate",
          "Email": "jonalyn@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 46,
          "parentId": 14,
          "Name": "Joseph Thomas Aaron",
          "Title": "Account Manager / Payroll Expert",
          "Email": "joseph@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 47,
          "parentId": 10,
          "Name": "Joven Delos Santos",
          "Title": "Corporate Sales Representative",
          "Email": "joven@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 48,
          "parentId": 91,
          "Name": "Juan Pablo Sapitan",
          "Title": "Software QA Engineer",
          "Email": "jp@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 49,
          "parentId": 91,
          "Name": "Karen Cometa",
          "Title": "Junior Quality Assurance Tester",
          "Email": "karen@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 50,
          "parentId": 54,
          "Name": "Karys Danielle Co",
          "Title": "Inbound Marketing Specialist",
          "Email": "karys@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 51,
          "parentId": 23,
          "Name": "Katrina Serio",
          "Title": "Corporate Sales Representative",
          "Email": "katrina@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 52,
          "parentId": 86,
          "Name": "Kelvin Araujo",
          "Title": "Customer Success Advocate",
          "Email": "kelvin@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 53,
          "parentId": 11,
          "Name": "Kenneth Razo",
          "Title": "Junior Software Engineer",
          "Email": "kenneth@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 54,
          "parentId": 80,
          "Name": "Kevin Nico Eniego",
          "Title": "Head of Marketing",
          "Email": "nix@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 55,
          "parentId": 42,
          "Name": "Kristin Jane Andes",
          "Title": "Accounting Staff",
          "Email": "kristin@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 56,
          "parentId": 9,
          "Name": "Kristina Virata",
          "Title": "Senior Customer Success Manager",
          "Email": "kristina@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 57,
          "parentId": 80,
          "Name": "Lai-den Padong",
          "Title": "HR Manager",
          "Email": "lai@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 58,
          "parentId": 91,
          "Name": "Lezyl Ladia",
          "Title": "Junior Software QA Tester",
          "Email": "lezyl@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 59,
          "parentId": 10,
          "Name": "Liezl Marantal",
          "Title": "HR Technology Advisor",
          "Email": "liezl@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 60,
          "parentId": 10,
          "Name": "Lisanne Marie Chantal Tumang",
          "Title": "HR Technology Consultant",
          "Email": "lisanne@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 61,
          "parentId": 10,
          "Name": "Lisle Owen Diamante",
          "Title": "Technical Sales Associate",
          "Email": "owen@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 62,
          "parentId": 91,
          "Name": "Louie Jay Lansangan",
          "Title": "Jr. Support Engineer",
          "Email": "louie@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 63,
          "parentId": 10,
          "Name": "Ma Alessandra Arce",
          "Title": "HR Technology Consultant",
          "Email": "alessandra@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 64,
          "parentId": 75,
          "Name": "Ma. Ellaine Cruz",
          "Title": "HR Admin Associate",
          "Email": "ellaine@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 65,
          "parentId": 80,
          "Name": "Mae Alexandria Gentry",
          "Title": "Co-Founder and Head of Product",
          "Email": "alexandria@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 66,
          "parentId": 75,
          "Name": "Maria Beatriz Ang",
          "Title": "HR Associate",
          "Email": "beatriz@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 67,
          "parentId": 9,
          "Name": "Maria Geraldine De Guzman",
          "Title": "Account Manager",
          "Email": "geraldine@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 68,
          "parentId": 10,
          "Name": "Maria Sonia Lu",
          "Title": "Corporate Sales Representative",
          "Email": "sonia@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 69,
          "parentId": 40,
          "Name": "Maricor Palangao",
          "Title": "Junior Software Engineer",
          "Email": "maricor@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 70,
          "parentId": 11,
          "Name": "Mark Angelo Monteras",
          "Title": "Junior Software Engineer",
          "Email": "mark@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 71,
          "parentId": 25,
          "Name": "Mark Lester Rayray",
          "Title": "Junior Software Engineer Level 3",
          "Email": "lester@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 72,
          "parentId": 91,
          "Name": "Marlon Montecerin",
          "Title": "Development Support",
          "Email": "marlon@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 73,
          "parentId": 26,
          "Name": "Mary Ann Bartolome",
          "Title": "Implementation Officer",
          "Email": "ann@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 74,
          "parentId": 39,
          "Name": "Mary Jane Abuid",
          "Title": "Account Manager/ Payroll Expert",
          "Email": "jane@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 75,
          "parentId": 9,
          "Name": "Melissa Gatmaitan",
          "Title": "Account Manager/Payroll Expert",
          "Email": "melissa@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 76,
          "parentId": 24,
          "Name": "Mon Christopher Santos",
          "Title": "Corporate Sales Executive",
          "Email": "christopher@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 77,
          "parentId": 10,
          "Name": "Nastassja Marie Natividad",
          "Title": "HR Technology Consultant",
          "Email": "nastassja@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 78,
          "parentId": 9,
          "Name": "Nelsa Soliven",
          "Title": "Senior Customer Success Manager",
          "Email": "nelsa@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 79,
          "parentId": 34,
          "Name": "Pappu Sabnani",
          "Title": "Senior UI Designer and Front End Developer",
          "Email": "pappu@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 80,
          "parentId": null,
          "Name": "Patrick Gentry",
          "Title": "VP of Information Management",
          "Email": "patrick@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 81,
          "parentId": 54,
          "Name": "Rachel Ching",
          "Title": "PR and Events Supervisor",
          "Email": "rachel@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 83,
          "parentId": 11,
          "Name": "Richard Losande",
          "Title": "Junior Software Engineer",
          "Email": "richard@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 84,
          "parentId": 9,
          "Name": "Ronald Jeoffrey Andulan",
          "Title": "Senior Professional Services Account Manager",
          "Email": "jeoffrey@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 85,
          "parentId": 80,
          "Name": "Rossanna Montecillo",
          "Title": "Senior Customer Support",
          "Email": "rossanna@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 86,
          "parentId": 80,
          "Name": "Sanz Fojas",
          "Email": "sanz@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 87,
          "parentId": 86,
          "Name": "Shiela Trinidad",
          "Title": "Professional Services Account Manager",
          "Email": "shiela@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 88,
          "parentId": 10,
          "Name": "Solena Niccolette Alumno",
          "Title": "HR Technology Consultant",
          "Email": "solena@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 89,
          "parentId": 25,
          "Name": "Stephane Matthew Sinagub",
          "Title": "Junior Software Engineer",
          "Email": "stephane@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 90,
          "parentId": 80,
          "Name": "Tiffany Nicole Mallillin",
          "Title": "Key Account Manager",
          "Email": "tiffany@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      },
      {
          "Id": 91,
          "parentId": 65,
          "Name": "Vincent Allen Villa",
          "Title": "Jr. Engineering Manager",
          "Email": "vincent@sprout.ph",
          "Image": "http://www.getorgchart.com/GetOrgChart/getorgchart-demos/images/f-14.jpg"
      }
    ]
  });

  function getNodeByClickedBtn(el) {
    while (el.parentNode) {
      el = el.parentNode;
      if (el.getAttribute("data-node-id"))
        return el;
    }
    return null;
  }

  var init = function () {
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var nodeElement = getNodeByClickedBtn(this);
        var action = this.getAttribute("data-action");
        var id = nodeElement.getAttribute("data-node-id");
        var node = orgChart.nodes[id];

        switch (action) {
          case "add":
            orgChart.insertNode(id);
            break;
          case "edit":
            orgChart.showEditView(id);
            break;
          case "preview":
            orgChart.showDetailsView(id);
            break;
        }
      });
    }
  }
  init();
</script>
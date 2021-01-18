var vm = new Vue({
  el: "#app",
  data: {
    projects: [],
    personalInfo: {
      name: "Arbnora Reshani",
      occupation: "Web Developer",
      shortDesc:
        "I develop elegant, performable, and accessible web solutions, and as an immense tech enthusiast, I can't shut up about how much I enjoy working with front-end development tools, especially Vue.js. One of the things I am most passionate about is the process of translating UI/UX design wireframes into reusable and easily maintainable code.",
    },
  },
  methods: {
    getProjects() {
      fetch("http://localhost:8081/api/projects")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.projects = data;
        })
        .catch(function (error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },
  },
  components: {
    localcomponent: {
      template: "<div><p>komponenta lokale</p></div>",
    },
    projekte: {
      props: ["project"],
      template: `
    <div>
      <h3>{{ project.title }}</h3>
      <div v-html="project.description"></div>
    </div>
  `,
    },
  },
});

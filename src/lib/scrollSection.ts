const scrollToSection = function ({ element_id }: { element_id: string }) {
  setTimeout(() => {
    const element = document.getElementById(element_id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } 
  }, 100);
};

export default scrollToSection;

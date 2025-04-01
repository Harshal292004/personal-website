const scrollToSection = function ({ element_id }: { element_id: string }) {
  console.log("Scrolling to:", element_id);
  setTimeout(() => {
    const element = document.getElementById(element_id);
    if (element) {
      console.log("Element found, scrolling");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      console.log("Element not found:", element_id);
    }
  }, 100);
};

export default scrollToSection;

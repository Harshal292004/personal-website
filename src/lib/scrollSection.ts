const scrollToSection = function ({ element_id }: { element_id: string }) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

export default scrollToSection
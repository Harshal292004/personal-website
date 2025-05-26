import useTypedFact from "@/lib/hooks/useTypedFacts";
import { fira_code, space_mono } from "@/lib/fonts";
const Terminal = () => {
  const { typedText, styles } = useTypedFact();
  return (
    <div className="mt-4 mb-4">
      <div
        className={`border-4 border-black bg-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0)] p-4 min-w-[180px] md:min-w-[620px]`}
      >
        <div className="flex items-center justify-between border-b-2 border-gray-700 pb-2 mb-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className={`${fira_code.className} text-gray-400 text-sm`}>
            ~:bash ―― Konsole{" "}
          </div>
          <div></div>
        </div>

        <div className="text-white font-mono h-10">
          <div className="mb-2">
            <span className={`${space_mono.className} text-blue-400`}>
              [harshal@machine ~]$
            </span>
            <span className={`${styles.font} ${styles.textClass}`}>
              {typedText}
            </span>
            <span
              className={`ml-1 h-3 mb-0 w-[4.75px] inline-block bg-white`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

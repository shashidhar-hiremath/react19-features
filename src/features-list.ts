import { Feature } from "./types";

export const REACT19_FEATURES: Feature[] = [
    // {
    //     title: "React Compiler",
    //     description: "React compiler will convert code in JavaScript making overall better app performance and think less about memorization.",
    //     codeUrl: "https://stackblitz.com/edit/react-ts-compiler?embed=1&file=index.tsx",
    //     benefits: [
    //                ]
    // },
    {
        title: "Remove forwardRef",
        description: "In React 19, the forwardRef API is no longer needed in many cases due to autobinding of refs in function components. This change simplifies code and improves maintainability.",
        codeUrl: "https://stackblitz.com/edit/react-forwardref-example?file=src%2FApp.js",
        benefits: [
            { title: 'Less Boilerplate', description: "No need to wrap components unnecessarily" },
            { title: 'Easier to Read', description: "More natural function component structure." },
            { title: 'Better Performance', description: "Avoids extra wrapping, leading to better optimizations." },
            { title: 'Improved TypeScript Support', description: "No need for manual typing of forwardRef" }
        ],
        oldCode:`const WrappedButton = forwardRef((props, ref) => (
  <ClassButton {...props} forwardedRef={ref} />
));`,
        newCode: `const Button = (props, ref) => {
  return <button ref={ref} {...props}>Click me</button>;
};
`,
    },
    {
        title: "<Context>",
        description: "In React 19, you can render <Context> as a provider instead of <Context.Provider>",
        codeUrl: "https://stackblitz.com/edit/react-ts-context-provider?embed=1&file=index.tsx",
        benefits: [
            { title: 'Less Boilerplate', description: 'No need to wrap components with forwardRef, making code more concise.' },
            { title: 'More Readable Code', description: 'Ref handling looks more natural and is easier to understand.' },
            { title: 'Improved Performance', description: 'Removes the additional wrapper function, allowing React to optimize components better.' },
            { title: 'Easier TypeScript Integration', description: 'No need to use RefObject types manually with forwardRef' },
        ],
        oldCode: `<AuthContext.Provider value={user}>
  <ThemeContext.Provider value="dark">
    <SettingsContext.Provider value={settings}>
      <App />
    </SettingsContext.Provider>
  </ThemeContext.Provider>
</AuthContext.Provider>
`,
        newCode: `<AuthContext value={user}>
  <ThemeContext value="dark">
    <SettingsContext value={settings}>
      <App />
    </SettingsContext>
  </ThemeContext>
</AuthContext>
`
    },
    {
        title: "use()",
        description: "This hook helps to load resources asynchronously. It can resolve promises and context.",
        codeUrl: "https://stackblitz.com/edit/react-ts-use-hook?embed=1&file=index.tsx",
        benefits: [
            { description: "Asynchronous resource loading" },
            { description: "Promise and context resolution" }
        ]
    },
    {
        title: "Cleanup functions for ref",
        description: "Ref cleanup functions are called when the element is unmounted.",
        codeUrl: "https://stackblitz.com/edit/react-ts-ref-cleanup?embed=1&file=index.tsx",
        benefits: [
            { description: "Proper resource cleanup" }
        ]
    },
    {
        title: "Actions: useOptimistic()",
        description: "useOptimistic can be used to avoid waiting for certain actions to finish running.",
        codeUrl: "https://stackblitz.com/edit/react-ts-use-optimistic?embed=1&file=index.tsx",
        benefits: [
            { description: "Instant UI feedback" },
            { description: "Better UX during network delays" },
            { description: "Seamless state transitions" },
            { description: "Reduced perceived latency" }
        ]
    },
    {
        title: "useDeferredValue()",
        description: "Support for deferred values in React 19.",
        codeUrl: "https://stackblitz.com/edit/react-ts-use-deferred-value?embed=1&file=index.tsx",
        benefits: [
            { description: "Improved performance for deferred values" }
        ]
    },
    {
        title: "Support for Document Metadata",
        description: "React 19 is going towards optimization on SEO.",
        codeUrl: "https://stackblitz.com/edit/react-ts-document-metadata?embed=1&file=index.tsx",
        benefits: [
            { description: "Better SEO optimization" }
        ]
    },
    {
        title: "Web components",
        description: "Now Web components can be directly used in React.",
        codeUrl: "https://stackblitz.com/edit/react-ts-web-components?embed=1&file=index.tsx",
        benefits: [
            { description: "Direct usage of Web components in React" }
        ]
    }
]
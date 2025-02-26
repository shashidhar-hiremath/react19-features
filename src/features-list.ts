import { Feature } from './types';

export const REACT19_FEATURES: Feature[] = [
  // {
  //     title: "React Compiler",
  //     description: "React compiler will convert code in JavaScript making overall better app performance and think less about memorization.",
  //     codeUrl: "https://stackblitz.com/edit/react-ts-compiler?embed=1&file=index.tsx",
  //     benefits: [
  //                ]
  // },
  {
    title: '<form>',
    description: `React 19 introduces a new <form> feature for react-dom. Support for passing functions as the action and formAction props of <form>, <input>, and <button> elements to automatically submit forms with Actions. Actions can also be performed on server with 'use server'.`,
    codeUrl:
      'https://codesandbox.io/p/sandbox/github/MSD118/react-19-demo?file=%2Fsrc%2FFormDemo%2FFormDemo.tsx',
  },
  {
    title: 'Actions: useOptimistic()',
    description:
      'The useOptimistic() hook allow React components to update the UI optimistically before the server responds. This provides instant feedback to users, improving the perceived performance of the application.',
    codeUrl:
      'https://codesandbox.io/p/sandbox/github/MSD118/react-19-demo?file=%2Fsrc%2FUseOptimistic%2FUpdateName.tsx',
    newCode: `  const [optimisticState, addOptimistic] = useOptimistic(state, updateFn)`,
    benefits: [
      { description: 'Instant UI feedback' },
      { description: 'Better UX during network delays' },
      { description: 'Seamless state transitions' },
      { description: 'Reduced perceived latency' },
    ],
  },
  {
    title: 'Actions: useActionState() Hook',
    description:
      'The useActionState() hook enables React components to manage the state of actions, such as loading, success, and error states. This simplifies the handling of asynchronous operations and provides a consistent pattern for managing action states across components.',
    codeUrl:
      'https://codesandbox.io/p/sandbox/github/MSD118/react-19-demo?file=%2Fsrc%2FUseActionStateDemo.tsx',
    newCode: `const [state, formAction, isPending] = useActionState(fn, initialState, permalink?)`,
    benefits: [
      { description: 'Simplified state management' },
      { description: 'Consistent action handling' },
      { description: 'Enhanced error handling' },
    ],
  },
  {
    title: 'Actions: useFormStatus() Hook',
    description: `The useFormStatus() hook allows React components to track the status of form submissions, including loading, success, and error states. This simplifies form handling and provides a clear way to manage form submission feedback.`,
    codeUrl:
      'https://codesandbox.io/p/sandbox/github/MSD118/react-19-demo?file=%2Fsrc%2FUseFormStatusDemo.tsx',
    newCode: `const { pending, data, method, action } = useFormStatus()`,
  },
  {
    title: 'Ref as a prop',
    description:
      'In React 19, ref can now be accessed as prop in function components, forwardRef is no longer needed. This change simplifies code and improves maintainability.',
    codeUrl:
      'https://codesandbox.io/p/sandbox/github/MSD118/react-19-demo?file=%2Fsrc%2FRefAsProp%2FRefAsPropDemo.tsx%3A40%2C1',
    benefits: [
      {
        title: 'Less Boilerplate',
        description: 'No need to wrap components unnecessarily',
      },
      {
        title: 'Easier to Read',
        description: 'More natural function component structure.',
      },
      {
        title: 'Better Performance',
        description: 'Avoids extra wrapping, leading to better optimizations.',
      },
      {
        title: 'Improved TypeScript Support',
        description: 'No need for manual typing of forwardRef',
      },
    ],
    oldCode: `const WrappedButton = forwardRef((props, ref) => (
  <ClassButton {...props} forwardedRef={ref} />
));`,
    newCode: `const Button = (props, ref) => {
  return <button ref={ref} {...props}>Click me</button>;
};
`,
  },
  {
    title: '<Context> as a provider ',
    description:
      'In React 19, <Context> can be rendered as a provider instead of <Context.Provider>',
    codeUrl:
      'https://stackblitz.com/edit/react-ts-context-provider?embed=1&file=index.tsx',
    benefits: [
      {
        title: 'Less Boilerplate',
        description:
          'No need to wrap components with forwardRef, making code more concise.',
      },
      {
        title: 'More Readable Code',
        description:
          'Ref handling looks more natural and is easier to understand.',
      },
      {
        title: 'Improved Performance',
        description:
          'Removes the additional wrapper function, allowing React to optimize components better.',
      },
      {
        title: 'Easier TypeScript Integration',
        description: 'No need to use RefObject types manually with forwardRef',
      },
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
`,
  },
  {
    title: 'use()',
    description:
      "The use() hook allows React components to synchronously read the value of a resource, like a Promise or a context. When used with Promises, it enables components to suspend rendering until the Promise resolves, integrating seamlessly with React's Suspense for handling loading states.",
    codeUrl:
      'https://stackblitz.com/edit/react-ts-use-hook?embed=1&file=index.tsx',
    features: [
      {
        title: 'Asynchronous Data Handling',
        description:
          'use() allows components to suspend rendering until a Promise resolves, streamlining data fetching directly within the component.',
      },
      {
        title: 'Context Consumption',
        description:
          'It enables reading from context objects, similar to useContext, but with added flexibility to be used conditionally within loops or conditionals.',
      },
      {
        title: 'Integration with Suspense',
        description:
          "When used with Promises, use() works seamlessly with React's Suspense to manage loading states, displaying fallback content while awaiting data.",
      },
      {
        title: 'Error Handling',
        description:
          ' If a Promise passed to use() rejects, it triggers the nearest error boundary, facilitating robust error management.',
      },
      {
        title: 'Conditional Usage',
        description:
          'Unlike traditional hooks, use() can be invoked inside loops and conditionals, offering greater flexibility in component logic.',
      },
    ],
    /**
         * Benifits:
         * Simplified Asynchronous Logic: Integrates async operations directly into component rendering, reducing the need for separate state and effect management.
Enhanced Code Readability: By embedding async logic within the component, code becomes more declarative and easier to follow.
Improved Flexibility: The ability to use use() conditionally allows for more dynamic and responsive component behavior.
Seamless Error Management: Automatic error boundary triggering on Promise rejection ensures robust and centralized error handling.
         */
  },
  {
    title: 'Cleanup functions for ref',
    description:
      'Traditionally, ref callbacks in React were used to access DOM elements or component instances when they mount. With React 19, these callbacks can now return a cleanup function that React will invoke when the component unmounts. This approach aligns ref management with the familiar pattern of cleanup functions in useEffect hooks.',
    codeUrl:
      'https://stackblitz.com/edit/react-ts-ref-cleanup?embed=1&file=index.tsx',
    benefits: [
      {
        title: 'Simplified Resource Management',
        description:
          'By allowing ref callbacks to return cleanup functions, React 19 reduces the need for separate useEffect hooks solely for cleanup purposes, leading to more concise and readable code.',
      },
      {
        title: 'Enhanced Consistency',
        description:
          'This feature brings consistency to how side effects and cleanups are handled across different React APIs, making the developer experience more intuitive.',
      },
      {
        title: 'Improved Performance',
        description:
          'Properly cleaning up resources like event listeners or observers helps prevent memory leaks and ensures that applications run efficiently.',
      },
    ],
    newCode: `import { useState } from 'react';

function ResizableComponent() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  function refCallback(node) {
    if (node) {
      const observer = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      });

      observer.observe(node);

      // Return a cleanup function to disconnect the observer on unmount
      return () => {
        observer.disconnect();
      };
    }
  }

  return (
    <div ref={refCallback}>
      Width: {size.width}, Height: {size.height}
    </div>
  );
}
`,
  },
  {
    title: 'useDeferredValue()',
    description:
      'The useDeferredValue hook allows you to defer updates to a value, enabling the UI to remain responsive by prioritizing more urgent updates. In React 19, an optional initialValue parameter has been introduced, which specifies the value to be used during the initial render. If initialValue is not provided, useDeferredValue will not defer during the initial render, as there is no previous value to display.',
    codeUrl:
      'https://stackblitz.com/edit/react-ts-use-deferred-value?embed=1&file=index.tsx',
    benefits: [
      {
        title: 'Improved Performance',
        description:
          'By deferring less critical updates, the UI remains responsive, enhancing the user experience.',
      },
      {
        title: 'Controlled Initial Render',
        description:
          'The initialValue parameter allows for a predictable initial state, reducing potential rendering issues.',
      },
      {
        title: 'Simplified Code',
        description:
          ' Integrating useDeferredValue reduces the need for complex state management or debouncing logic.',
      },
    ],
    newCode: `import { useState, useDeferredValue } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query, '');

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <SearchResults query={deferredQuery} />
    </>
  );
}

function SearchResults({ query }) {
  // Fetch and display results based on the query
  // This could involve API calls or filtering a dataset
}
`,
  },
  {
    title: 'Support for Document Metadata',
    description:
      'Prior to React 19, incorporating document metadata required external libraries like react-helmet or manual DOM manipulations, which could be cumbersome and error-prone. With the introduction of native support, React now automatically hoists metadata tags defined within components to the <head> section of the HTML document during rendering. This ensures that metadata is accurately reflected without additional dependencies or complex setups.',
    codeUrl:
      'https://stackblitz.com/edit/react-ts-document-metadata?embed=1&file=index.tsx',
    benefits: [
      {
        title: 'Simplified SEO Management',
        description:
          'By allowing metadata to be defined within components, React 19 eliminates the need for external libraries or manual DOM manipulations, making SEO optimization more straightforward.',
      },
      {
        title: 'Improved Performance',
        description:
          'Native handling of metadata reduces the overhead associated with third-party libraries, leading to potentially better performance.',
      },
      {
        title: 'Enhanced Developer Experience',
        description:
          'Embedding metadata directly within components promotes a more intuitive and cohesive development process, as all related code resides in a single place.',
      },
      {
        title: 'Automatic Handling During SSR',
        description:
          'For applications utilizing Server-Side Rendering (SSR), React 19 ensures that metadata is correctly rendered on the server, improving search engine indexing and initial load performance.',
      },
    ],
    newCode: `function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <meta name="author" content={post.author} />
      <link rel="canonical" href={post.url} />
      <p>{post.content}</p>
    </article>
  );
}
`,
  },
  {
    title: 'Web components',
    description:
      'Prior to React 19, integrating Web Components required workarounds, such as using refs for property assignment and manually attaching event listeners. With the latest update, React now natively supports the rendering and interaction with Custom Elements, simplifying their usage within React components.',
    codeUrl:
      'https://stackblitz.com/edit/react-ts-web-components?embed=1&file=index.tsx',
    features: [
      {
        title: 'Automatic Property and Attribute Handling:',
        description:
          'Props matching a property on the Custom Element instance are assigned as properties; otherwise, they are set as attributes.',
      },
      {
        title: 'Event Handling',
        description:
          'Custom events emitted by Web Components can now be handled using the standard onEventName syntax in JSX, eliminating the need for manual event listener attachment.',
      },
    ],
    newCode: `import React from 'react';

// Assuming 'my-web-component' is a custom element defined elsewhere
function App() {
  const handleCustomEvent = (event) => {
    console.log('Custom event data:', event.detail);
  };

  return (
    <div>
      <my-web-component
        someProp="value"
        onCustomEvent={handleCustomEvent}
      />
    </div>
  );
}

export default App;
`,
    benefits: [
      {
        title: 'Simplified Integration',
        description:
          ' Native support reduces the need for workarounds, making it easier to incorporate Web Components into React applications.',
      },
      {
        title: 'Improved Developer Experience',
        description:
          'Developers can now use standard JSX syntax for properties and events, leading to cleaner and more maintainable code.',
      },
      {
        title: 'Enhanced Interoperability',
        description:
          'This update fosters better collaboration between different technologies and frameworks, allowing for the reuse of components across various projects.',
      },
    ],
  },
];

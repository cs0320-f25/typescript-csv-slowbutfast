## notes on tests

- test
    - we need to make sure the csv data is good
        - i.e. even number of rows
        - maybe valid data for each column, if datatype provided?
        - *actually idk if this is necessary*
    - make sure data is split into 2d array or array of objects
    - if we're implementing the row/header specifictation, making sure that feature works
    - many of the delimiter issues (with commas)
        - empty columns (empty space)
        - double quotes surrounding an entry
        - commas within double quotes

## Task B
- #### **Functionality:** What might be broken or underspecified in the functionality, in terms of the CSV specification? 
    - No mention of special escape characters
    - How does the parser handle errant commas? Sometimes commas are used in place of decimals (like 3,14). This would ruin our parser
    - What is an "empty column"? I currently interpret it as an entry with the form ", ," or simply an empty space.
    - Figure out what sort of "Zod schema" it requires from the user. Current description is vague.
- #### **Extensibility:** What could the function do better from the perspective of a caller? Think in terms of validation, error handling, what the caller might need to do with the function, etc.
    - we could ask for specific datatypes for each column
    - ideally we write semi-descriptive errors
        - figure what these errors are later
    - the parser should work with any type of data/number system (i.e. using commas in place of decimals)
    - possibily work with other delimiters aside from newlines for rows and commas for columns

- #### Prompt-engineering:
    - prompt 1:
    `I’m working on a CSV parser in TypeScript that currently accepts a filename as input and converts rows into strings or objects. What are some missing features or edge cases that I should consider? What improvements would make it easier for other developers to use in different kinds of apps? What functionality should I expect from my app, so that I can make sure its useful? `
        - here I added extra context
    - prompt 2: `I’m working on a CSV parser in TypeScript. What are some missing features or edge cases that I should consider? What improvements would make it easier for other developers to use in different kinds of apps?`
        - here i removed the latter half of the first sentence to see how the results would change.

- #### Take note of what it suggests. Is there overlap with what you thought of? What possible concerns did it point out that you may have missed? Where might it have missed the point? 
    - **overlap:**  
        - we both noted the need for the parser to handle user-specified delimiters
        - also with the need to handle escape characters and errant commas
        - the need to handle specific data types in each column
        - the need for descriptive errors
    - **points i might've missed**
        - the need for streaming and parallel processing
        - the need to handle special character encoding 
    -**where the LLM missed the point**
        - Didn't really note the need for a specific "Zod schema"
    
    - 
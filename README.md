# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    - #### **Functionality:** What might be broken or underspecified in the functionality, in terms of the CSV specification? 
        - No mention of special escape characters
        - How does the parser handle errant commas? Sometimes commas are used in place of decimals (like 3,14). This would ruin our parser.
        - What is an "empty column"? I currently interpret it as an entry with the form ", ," or simply an empty space.
        - Figure out what sort of "Zod schema" it requires from the user. Current description is vague.
    - #### **Extensibility:** What could the function do better from the perspective of a caller? Think in terms of validation, error handling, what the caller might need to do with the function, etc.
        - we could ask for specific datatypes for each column
        - ideally we write semi-descriptive errors
            - figure what these errors are later
        - the parser should work with any type of data/number system (i.e. using commas in place of decimals)
        - possibily work with other delimiters aside from newlines for rows and commas for columns


- #### Step 2: Use an LLM to help expand your perspective. 

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.)

    1. **Functionality, from me:** As a user, errant commas or other special characters from imperfect data could cause errors, which need to be handled so that imperfect data doesn't completely ruin the program.
    2. **Extensibility, from me:** As a user, I could specify specific datatypes for each column so that we can validate them as we run the parser which would ensure that the result of the parser is more usable and trustworthy.
    3. **Extensibility, from me:** As a user we need to descriptive error messages so that when they inevitably occur, we can figure out how to debug the code.
    4. **Functionality, from LLM:** As a user, streaming & asyncrhonous operations (not sure what this is) will make the parser much more efficient on large (practical) datasets.

    - *rough notes on LLM output*
        - **overlap:**  
            - we both noted the need for the parser to handle user-specified delimiters
            - also with the need to handle escape characters and errant commas
            - the need to handle specific data types in each column
            - the need for descriptive errors
        - **points i might've missed**
            - the need for streaming and parallel processing
            - the need to handle special character encoding 
        - **where the LLM missed the point**
            - Didn't really note the need for a specific "Zod schema"
    - #### formatted notes:
        When I first brainstormed ideas, I believe I was more focused on the user expierence, such as implementing user-specified custom delimiters and adding type defined columns. The LLM had a lot more technical suggestions like the need for "streaming and asynchronous operations" as well as the need to handle special character encoding, which I had very little knowledge about. Changing the prompt had little effect on general suggestions on how to improve the program, but adding the question, "What functionality should I expect from my app, so that I can make sure it's useful?", added a nice "Expected Functionality" section to the response which summarized the core requirements for a "useful" parser.

### Design Choices

### 1340 Supplement

- #### 1. Correctness
    - the parser outputs the same data it was fed
    - it can handle localized data (i.e. delimiters other than commas)
    - it should throw descriptive errors to help users debug issues
    - it is efficient on large datasets  

- #### 2. Random, On-Demand Generation
    - This random data will provide simulate edge cases with "real" data. We can also test the program efficiency on large datasets. By stress-testing our program, we can more closely catch and fix bugs that would be found our users before they actually happen.

- #### 3. Overall experience, Bugs encountered and resolved
    - My overall expierence differed greatly from my previous CS classes. While in my other CS classes I could fix errors and progress in a relatively straightforward manner, for this first sprint, I had to search up and read a lot of documentation on unfamiliar typescript and Zod features. This led to a very slow moving, but methodical approach to completing this sprint.
    #### Errors/Bugs: 
    - Many of the errors and bugs I encountered were found due to my unfamiliarity with typescript and the Zod package.
    - I fixed them by reading up on the relevant documentation or with resources online. 

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project: 6-7 hours
#### Link to GitHub Repo: https://github.com/cs0320-f25/typescript-csv-slowbutfast.git

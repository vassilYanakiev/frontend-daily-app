
# This projects implements the tasks below:

tables:

1. id, name, role /image url/

2. linked tables: tasks, 
name, start date, description, percentage done, foreign key for id, 


node, typescript ,typeOrm - с миграция;

strucure - cotrollers, endpoints

endpoints: all users, per user -> tasks, 

FE:

от ляво хората подредени един под друг / почти 100 височина и шеирочина 40 по 40 кръгла/. 
отдясно се появяват задачите на човека, който е избран.

отдясно също и таймера



# React + TypeScript + Vite

Frontend impelementation of the task management app.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

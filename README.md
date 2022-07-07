# Redux Toolkit 1.8.3 version

## Inicialización del proyecto

```sh
npm create vite@latest
    project_name

cd project_name
(project_name) $ npm install
(project_name) $ npm run dev
```
## Creando un snippet

1. ctl + p
2. Configure user snippets
3. Select the language programming
4. Edit language.json (javascript.json)

```json
{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Crear un slice de Redux": {
		"prefix": "redux-slice",
		"body": [
			"import { createSlice } from '@reduxjs/toolkit';",
			"",
			"export const ${1:template}Slice = createSlice({",
			"    name: '${1:template}',",
			"    initialState: {",
			"        counter: 10",
			"    },",
			"    reducers: {",
			"        increment: (state, /* action */ ) => {",
			"            state.counter += 1;",
			"        },",
			"    }",
			"});",
			"",
			"",
			"// Action creators are generated for each case reducer function",
			"export const { increment } = ${1:template}Slice.actions;"
		],
		"description": "Crear un slice de Redux"
	},
	"Crea un reducer template": {
		"prefix": "redux-reducer",
		"body": [
			"${1:reducerName}: ( state, action ) => {",
			"    $2console.log(action);",
			"}"
		],
		"description": "Crea un reducer template"
	}
}

```
5. Implement snippet with the name by example: `redux-slice`

_Nota:_ Ctl + Alt + ↑ / Ctl + Alt + ↓: Para colocar el cursor | en multilinea.
import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';

// 1 Описываем мутацию
const mutation = gql `
mutation CreateView($input: PostInput!){
createPost(input: $input){
  title
  text
}
}
`

// 2 отправляем данные формы как объект так как тип PostInput! требует объект
const CreateView = () => {
  let input;
  let inputtext;

  return (
    <div>
  <Mutation mutation={mutation}>
      {(createPost, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createPost({ variables: { input: {title: input.value, text: inputtext.value} }});
              input.value = "";
              inputtext.value = "";
            }}>

            <input
              ref={node => {
                input = node;
              }}
            />

            <input
              ref={node => {
                inputtext = node;
              }}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </Mutation>

    <Link to={`/`}>
    Home
    </Link>
  </div>
  );
};

// Важное примечание, в рабочем приложении нужно обновлять КЕШы

export default CreateView;

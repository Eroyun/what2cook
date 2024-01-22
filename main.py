from flask import Flask, request, jsonify
from dotenv import dotenv_values
from langchain.prompts.chat import SystemMessagePromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate, ChatPromptTemplate
from langchain.memory import ConversationBufferMemory
from langchain.chains import LLMChain
from langchain_openai import ChatOpenAI
from langchain_community.callbacks import get_openai_callback

app = Flask(__name__)


@app.route('/conversation', methods=['POST'])
def conversation():
    response = ""
    data = request.get_json()

    env = dotenv_values(".env")

    with get_openai_callback() as cb:
        chat_openai = ChatOpenAI(
            temperature=0, openai_api_key=env['OPENAI_KEY'])

        prompt = ChatPromptTemplate(
            messages=[
                SystemMessagePromptTemplate.from_template(
                    "You are a nice chatbot having a conversation with a human."),
                MessagesPlaceholder(variable_name="chat_history"),
                HumanMessagePromptTemplate.from_template("{question}"),
            ]
        )

        memory = ConversationBufferMemory(
            memory_key="chat_history", return_messages=True)

        conversation = LLMChain(
            llm=chat_openai, prompt=prompt, verbose=True, memory=memory)

        response = conversation({"question": data["message"]})
        print(response)
        print(cb)
    return jsonify({"response": response["text"]})


if __name__ == '__main__':
    app.run()

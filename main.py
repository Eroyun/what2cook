from dotenv import dotenv_values

from langchain.prompts.chat import (
    SystemMessagePromptTemplate,
    MessagesPlaceholder,
    HumanMessagePromptTemplate,
    ChatPromptTemplate
)
from langchain.memory import ConversationBufferMemory
from langchain.chains import LLMChain
from langchain_openai import ChatOpenAI

env = dotenv_values(".env")

llm = ChatOpenAI(
    temperature=0, openai_api_key=env['OPENAI_KEY'])

prompt = ChatPromptTemplate(
    messages=[
        SystemMessagePromptTemplate.from_template(
            "You are a nice chatbot having a conversation with a human."
        ),
        # The `variable_name` here is what must align with memory
        MessagesPlaceholder(variable_name="chat_history"),
        HumanMessagePromptTemplate.from_template("{question}"),
    ]
)

memory = ConversationBufferMemory(
    memory_key="chat_history", return_messages=True)

conversation = LLMChain(llm=llm, prompt=prompt, verbose=True, memory=memory)

print(conversation({"question": "my name is Eren"}))

print(conversation({"question": "what is my name?"}))

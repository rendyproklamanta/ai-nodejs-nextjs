# Usage


Start development :

```
./run.sh
```

## Set OpenAI API Key:

Make a POST request to /setKey with the API key in the body:
json

```
{
  "apiKey": "YOUR_OPENAI_API_KEY"
}

```

## Start a Conversation:

Make a POST request to _/conversation_ with the required details:
json

```
{
  "instructions": "Respond to user queries",
  "messageContent": "Your initial message to GPT-3.5",
  "additionalInstructions": "Any additional instructions for GPT-3.5"
}

```

## You will get the full response object

```
{
    "assistantId": "asst_NqoaapcuDNwi78vmPqrPJKPA",
    "threadId": "thread_S4KVGKDuy9SGWQw6vAH0oNGK",
    "runId": "run_QEd7aQbkOtX6lnJi8Dxi4fRP",
    "messages": [
        {
            "id": "msg_slz6FrUMSEcUclVST3kile8r",
            "object": "thread.message",
            "created_at": 1701289332,
            "thread_id": "thread_S4KVGKDuy9SGWQw6vAH0oNGK",
            "role": "assistant",
            "content": [
                {
                    "type": "text",
                    "text": {
                        "value": "Hello! I can help you with a wide range of tasks, including but not limited to data analysis, programming, research, writing, and more. Feel free to let me know what you need assistance with, and I'll do my best to help you!",
                        "annotations": []
                    }
                }
            ],
            "file_ids": [],
            "assistant_id": "asst_NqoaapcuDNwi78vmPqrPJKPA",
            "run_id": "run_QEd7aQbkOtX6lnJi8Dxi4fRP",
            "metadata": {}
        },
        {
            "id": "msg_GukIF9gdmX0teTLRPqNxWF7V",
            "object": "thread.message",
            "created_at": 1701289331,
            "thread_id": "thread_S4KVGKDuy9SGWQw6vAH0oNGK",
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": {
                        "value": "Hello, how can you help me today?",
                        "annotations": []
                    }
                }
            ],
            "file_ids": [],
            "assistant_id": null,
            "run_id": null,
            "metadata": {}
        }
    ]
}

```

## Built With

- Nodejs
- Express - The web framework used
- OpenAI - OpenAI API for AI-powered conversations
- NextJS - Frontend framework

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Thank you _OpenAI_ team for providing the best GPT-4 API.

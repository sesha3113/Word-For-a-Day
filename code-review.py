import requests

# Define your SonarQube server URL and authentication token
SONARQUBE_URL = 'http://your-sonarqube-server:9000'
SONARQUBE_TOKEN = 'your-sonarqube-token'

# Define your ChatGPT API endpoint and API key
CHATGPT_API_URL = 'http://your-chatgpt-api-endpoint'
CHATGPT_API_KEY = 'your-chatgpt-api-key'

# Function to fetch SonarQube issues
def fetch_sonarqube_issues():
    issues_url = f'{SONARQUBE_URL}/api/issues/search'
    params = {
        'resolved': 'false',  # Get unresolved issues
        'ps': 100,  # Number of issues to retrieve (adjust as needed)
    }
    headers = {
        'Authorization': f'Bearer {SONARQUBE_TOKEN}',
    }

    response = requests.get(issues_url, params=params, headers=headers)
    return response.json()

# Function to generate code review comments using ChatGPT
def generate_code_review_comments(sonarqube_issues):
    comments = []
    for issue in sonarqube_issues['issues']:
        # Extract relevant information from SonarQube issue
        issue_key = issue['key']
        issue_message = issue['message']

        # Prepare a message to send to ChatGPT
        chatgpt_input = f"SonarQube issue {issue_key}: {issue_message}"
        
        # Send the message to ChatGPT for review
        chatgpt_response = send_message_to_chatgpt(chatgpt_input)

        # Extract ChatGPT's response with suggested fixes
        suggested_fixes = chatgpt_response['suggested_fixes']
        
        # Format the comment with the issue key, message, and suggested fixes
        comment = f"SonarQube issue {issue_key}: {issue_message}\n\nSuggested fixes:\n{suggested_fixes}"
        comments.append(comment)

    return comments

# Function to send a message to ChatGPT for review
def send_message_to_chatgpt(message):
    headers = {
        'Authorization': f'Bearer {CHATGPT_API_KEY}',
        'Content-Type': 'application/json',
    }
    data = {
        'message': message,
    }
    response = requests.post(CHATGPT_API_URL, headers=headers, json=data)
    return response.json()

if __name__ == "__main__":
    sonarqube_issues = fetch_sonarqube_issues()
    code_review_comments = generate_code_review_comments(sonarqube_issues)

    # Print or process the code review comments as needed
    for comment in code_review_comments:
        print(comment)
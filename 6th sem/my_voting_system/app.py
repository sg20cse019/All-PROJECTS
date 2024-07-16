from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Simulated database for storing vote counts
votes = {
    'option1': 0,
    'option2': 0,
    'option3': 0,
}

@app.route('/')
def voting_page():
    return render_template('voting_page.html')

@app.route('/vote', methods=['POST'])
def vote():
    selected_option = request.form.get('option')
    if selected_option in votes:
        votes[selected_option] += 1
    return redirect(url_for('result'))

@app.route('/result')
def result():
    total_votes = sum(votes.values())
    return render_template('result_page.html', votes=votes, total_votes=total_votes)

if __name__ == '__main__':
    app.run(debug=True)

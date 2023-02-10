from flask import Flask

app = Flask(__name__)

# pizdec API route
@app.route("/admin")
def members():
    return {"greeting": "Hello pizdec"} # JSON string

if __name__ == "__main__":
    app.run(debug=True) # LETS GO NAHOI


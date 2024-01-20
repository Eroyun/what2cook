from web import create_app
import os
application = create_app()

if os.environ["ENVIRONMENT"] == "development":
    application.run(debug=True, host="0.0.0.0", port=5000)

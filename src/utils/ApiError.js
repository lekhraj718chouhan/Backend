class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "" // Check that this is spelled correctly
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack; // Ensure 'stack' is used here, not 'statck'
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
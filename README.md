# Ostrich

Effective team cooperating tool.

## How to run frontend?

Change into `frontend` directory, `npm install` and then `ng serve`.
You can then check it at `http://localhost:4200`.

## Commit principle

Please don't put `application.properties` file under Git version control.

You should add a file with environment postfix like `application-local.properties`
and set 'Active Profiles' in IDEA run configurations to `local`.

## Environment

* PostgreSQL (default port is 5432)
* Redis (default port is 6379)

You should set the database names and ports at your own application properties file.

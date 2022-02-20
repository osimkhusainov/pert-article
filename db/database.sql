CREATE TABLE article(
    id SERIAL PRIMARY KEY,
    heading VARCHAR(255) DEFAULT 'Untitled article',
    content VARCHAR(10000),
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ
);
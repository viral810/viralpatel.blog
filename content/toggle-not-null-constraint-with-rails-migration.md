---
slug: toggle-not-null-constraint-with-rails-migration
title: Toggle NOT NULL constraint with Rails migration
date: "2019-05-08"
tags:
  - "database"
  - "mysql"
  - "rails"
  - "migrations"
  - "ruby"
thumbnail: ./thumbnails/rails.png
---

Take advantage of `change_column_null` to add or remove **NOT NULL** constraint on a column. The `null` flag indicates whether the value can be **NULL**.

To add the constraint (says column cannot be NULL):

```ruby
change_column_null :users, :name, false
```

To remvoe the constraint (allows column to be NULL):

```ruby
change_column_null :users, :name, true
```

The method accepts an optional fourth argument to replace existing +NULL+s with some other value. Use that one when enabling the constraint if needed, since otherwise those rows would not be valid.

> Note: Please note the fourth argument does not set a column’s default.

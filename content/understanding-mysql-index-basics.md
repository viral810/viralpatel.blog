---
slug: understanding-mysql-index-basics
title: Understanding MySQL Index Basics
date: "2019-03-03"
tags: ["database", "mysql", "index", "indices", "mysql basics"]
---

An index is an on-disk or in-memory structure associated with a table or view that speeds retrieval of rows from the table or view. An index contains keys built from one or more columns in the table or view. For on-disk indexes, these keys are stored in a structure (B-tree) that enabled SQL server to find the row or rows associated with the key values quickly and efficiently.

An index stores data logically organized as a table with rows on columns, and physically stored in a row-wise data format called row-store, or stored in a column-wise data format called column-store.

The selection of the right indexes for a database and its workload is a complex balancing act between query speed and update cost. Narrow indexes, or indexes with few columns in the index key, require less disk space and maintenance overhead. Wide indexes, on the other hand, cover more queries. You may have to experiment with several different designs before finding the most efficient index. Indexes can be added, modified and dropped without affecting the database schema or application design. Therefore, you should not hesitate to experiment with different indexes.

_row-store has been the traditional way to store relational table data._

**Without an index, MySQL must begin with the first row and then read through the entire table to find the relevant rows.**

The larger the table, the more this costs. If the table has an index for the columns in question, MySQL can quickly determine the position to seek to in the middle of the data file without having to look at all the data. This is much faster than reading every row sequentially.

##### Here is a sample command to add an index to the existing table

```sql
CREATE INDEX user_name_index ON user (name);
```

**if using b-tree,**

```sql
CREATE INDEX user_name_index ON user (name) USING BTREE;
```
